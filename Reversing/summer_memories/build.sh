gcc hidden.c -o hidden
python craft.py
nasm -f elf64 -o memories.o memories.nasm
ld -o memories memories.o -I /lib64/ld-linux-x86-64.so.2
cp ./memories ./handout
