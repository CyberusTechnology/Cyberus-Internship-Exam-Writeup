import random

magic = [58530, 13472, 50948, 48301, 48923, 10333, 50332, 25976, 57482, 57947, 56913, 61086, 4996, 50532, 39444, 20075, 14795, 13939, 63193, 26216, 60329, 44922, 27530, 53916, 36064, 5963, 21625, 39399, 14936, 58396, 17982, 32694, 44632, 26415, 4409, 18628, 42076, 36786, 28303]

def check(flag):
    if len(flag) != 29:
        return False

    random.seed(39)
    for i in range(39):
        maxRand = len(flag) - 1
        a = random.randint(0, maxRand)
        b = random.randint(0, maxRand)
        c = random.randint(0, maxRand)
        d = random.randint(0, maxRand)

        part_1 = ((flag[a] ^ 39) << 8) + flag[b]
        part_2 = ((flag[c] ^ 39) << 8) + flag[d]
        v = (part_1 * part_2) & 0xffff
        if v != magic[i]:
            return False

    return True

if __name__ == "__main__":
    flag = input("Prove me: ").encode("ascii")
    if check(flag):
        print("YOU WON!")
    else:
        print("YOU LOSE!")
