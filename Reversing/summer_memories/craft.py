def loadBin():
    file = open("./hidden", "rb").read()
    return file

def craft():
    data = loadBin()
    instructions = []
    l = len(data)
    count = -8
    w = lambda x : instructions.append(x)

    w("global _start")
    w("SECTION .data")
    w("greeting db \"Lost summer memories, all I can remember are songbirds\"")
    w("greeting_len equ $-greeting")
    w("SECTION .text")
    w("_start:")
    w("mov rbp, rsp")
    w("push rbp")
    w(f"sub rsp, {l + 16}")

    for b in data:
        instructions.append(f"mov byte [rbp-{l-count}], {b ^ 0x39}")
        count += 1

    w("mov rax, 1")
    w("mov rdi, 1")
    w("mov rsi, greeting")
    w("mov rdx, greeting_len")
    w("syscall")
    w("push rax")
    w("mov rax, 60")
    w("pop rdi")
    w("sub rdi, greeting_len")
    w("syscall")

    file = open("memories.nasm", "w")
    file.write("\n".join(i for i in instructions))

craft()
