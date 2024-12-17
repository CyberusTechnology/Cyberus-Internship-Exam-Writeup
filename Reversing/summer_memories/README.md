# Summer memories

### Description

Can you recover my memories?

### Author

momiji

### Points

100

# Write-up

We are given a huge binary, why not run it (in a VM ofc) and see what it does.

```
Lost summer memories, all I can remember are songbirds
```

over 900kb for that? something doesn't seem right. Let's try to disassemble it.

```
0x00401000      4889e5         mov rbp, rsp                ; [01] -r-x section size 114379 named .text
0x00401003      55             push rbp
0x00401004      4881ec1040..   sub rsp, 0x4010
0x0040100b      c685f8bfff..   mov byte [rbp - 0x4008], 0x46 ; 'F' ; 70
0x00401012      c685f9bfff..   mov byte [rbp - 0x4007], 0x7c ; '|' ; 124
0x00401019      c685fabfff..   mov byte [rbp - 0x4006], 0x75 ; 'u' ; 117
0x00401020      c685fbbfff..   mov byte [rbp - 0x4005], 0x7f ; '\x7f' ; 127
0x00401027      c685fcbfff..   mov byte [rbp - 0x4004], 0x3b ; ';' ; 59
0x0040102e      c685fdbfff..   mov byte [rbp - 0x4003], 0x38 ; '8' ; 56
0x00401035      c685febfff..   mov byte [rbp - 0x4002], 0x38 ; '8' ; 56
```

We are greeted with this huge set of instructions to move bytes into the stack,
what could this be? If you are familiar with linux `ELF` format you will notice 
that this is very similar to `ELF` header, but it is not quite an `ELF` header,
it looks like it is encrypted with something, since it is moving one byte at a
time it have a high chance for it to be XOR with a single byte. Let's try to get 
the first four bytes and bruteforce XOR it with `cyberchef`.

```
Key = 19: _elf
Key = 39: .ELF
```

Seems like `0x39` is the key that XOR'ed these bytes. What we can do now is to 
dump these instructions and only get those bytes to create and `ELF` file.

Without XOR bruteforcing we can also notice that null bytes are `0x39`.

From this onward please refer to `solve` directory.
