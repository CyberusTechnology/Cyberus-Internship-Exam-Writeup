from z3 import *
import chall
import random

magic = [58530, 13472, 50948, 48301, 48923, 10333, 50332, 25976, 57482, 57947, 56913, 61086, 4996, 50532, 39444, 20075, 14795, 13939, 63193, 26216, 60329, 44922, 27530, 53916, 36064, 5963, 21625, 39399, 14936, 58396, 17982, 32694, 44632, 26415, 4409, 18628, 42076, 36786, 28303]

def solve():
    flagLen = 29
    x = [BitVec(f"char {i}", 8) for i in range(flagLen)]
    s = Solver()

    random.seed(39)
    for i in range(0, 39):
        a = random.randint(0, flagLen - 1)
        b = random.randint(0, flagLen - 1)
        c = random.randint(0, flagLen - 1)
        d = random.randint(0, flagLen - 1)

        s.add((((x[a] ^ 39) << 8) + x[b]) * (((x[c] ^ 39) << 8) + x[d]) & 0xffff == magic[i])

    for i in range(flagLen):
        s.add(And(x[i] >= 0x30, x[i] <= 0x7f))

    while s.check() == sat:
        sol = s.model()
        flag = [sol[f].as_long() for f in x]
        flag = b"".join(chr(i).encode() for i in flag)

        if chall.check(flag):
            print("Hurray!")
            print(flag)
            exit(0)

        block = []
        for var in sol:
            block.append(var() != sol[var])
        s.add(Or(block))

if __name__ == "__main__":
    solve()
