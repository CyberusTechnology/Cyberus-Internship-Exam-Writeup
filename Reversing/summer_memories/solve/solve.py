import subprocess

def load_input():
    file = open("out.txt", "r").read().split("\n")
    return file

def load_elf():
    data = load_input()
    output = b""
    for i in data:
        if i == "":
            continue

        if len(i) > 1:
            b = int(i[2:], 16) ^ 0x39
        else:
            b = int(i, 10) ^ 0x39

        output += int.to_bytes(b)

    with open("exe", "wb") as file:
        file.write(output)

load_elf()
