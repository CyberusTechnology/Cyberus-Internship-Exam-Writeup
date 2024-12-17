import random
flag = b"flag{s4nkyuu_z3_m4g1c_s0lv3r}"
magic = []
random.seed(39)
for i in range(39):
    max = len(flag) - 1
    a = random.randint(0, max)
    b = random.randint(0, max)
    c = random.randint(0, max)
    d = random.randint(0, max)

    part_1 = ((flag[a] ^ 39) << 8) + flag[b]
    part_2 = ((flag[c] ^ 39) << 8) + flag[d]
    v = (part_1 * part_2) & 0xffff
    magic.append(v)

file = open("./magic.py", "w")
file.write(f"magic = {magic}")
file.close()
print(len(flag))
print(magic)
