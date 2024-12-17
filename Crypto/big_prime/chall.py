from Crypto.Util.number import *

flag = b"flag{eul3r_7071en7_func710n}"

e = 0x10001
p = getPrime(2048)
phi = p - 1
d = pow(e, -1, phi)
ct = pow(bytes_to_long(flag), e, p)

print(f"n = {p}")
print(f"e = {e}")
print(f"ct = {ct}")
