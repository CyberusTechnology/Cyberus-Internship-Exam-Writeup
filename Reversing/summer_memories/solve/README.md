Using Radare2 to dump out the assembly

`rabin2 -S memories`
```
[Sections]

nth paddr          size vaddr         vsize perm type     name
――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
0   0x00000000      0x0 0x00000000      0x0 ---- NULL
1   0x00001000  0x1becb 0x00401000  0x1becb -r-x PROGBITS .text
2   0x0001d000     0x36 0x0041d000     0x36 -rw- PROGBITS .data
3   0x0001d038     0xc0 0x00000000     0xc0 ---- SYMTAB   .symtab
4   0x0001d0f8     0x3d 0x00000000     0x3d ---- STRTAB   .strtab
5   0x0001d135     0x27 0x00000000     0x27 ---- STRTAB   .shstrtab
```
We can see that the size of .text section is 0x1becb so we just 
need to dump those out using `pd 0x1becb > out.txt` within `r2`.

Now just manipulate the text so that only the data is left out, something like
```
0x46
0x7c
0x75
0x7f
```

After that, we read and convert into int then `xor` with `0x39`,
write into file and execute.
