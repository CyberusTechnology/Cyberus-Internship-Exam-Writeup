#!/usr/local/bin/python

from random import randint
from time import sleep

flag = "flag{c0ngr4tz_0n_d3fu3s1ng_th3_p1p3_b0mb_y0u_ar3_p1p3_m4st3r}"
sentences = [
    "Woah, Woah, Woah, Woah, Pipe bomb, So Cool, I wonder what happen if I, Ah-",
    "Is it a pipe bomb or a flag? more likely a pipe bomb",
    "A flag? what is that",
    "Are you looking for a flag? unfortunately here is a pipe bomb instea-",
    "There are no flag, Only pipe bomb",
    "Are you really looking for a flag? that is silly, have pipe bomb instead",
    "Miku loves pipe bomb and she hates giving out the flag"
]

if __name__ == "__main__":
    for i in range(100):
        for _ in range(10):
            print(sentences[randint(0, len(sentences) - 1)])
        sleep(0.01)

    print(flag)

    for i in range(50):
        for _ in range(10):
            print(sentences[randint(0, len(sentences) - 1)])
        sleep(0.01)
