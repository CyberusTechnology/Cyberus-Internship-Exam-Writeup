# since xor is associative and we know the flag format
# we can determined the key by xor'ing the cipher text
# with flag{ to reveal part of the secret key
# from that we can kinda guess what the secret key is

def xor(a, b):
    length = max(len(a), len(b))
    x = a * (length // len(a)) + a[:length % len(a)]
    y = b * (length // len(b)) + b[:length % len(b)]

    return bytes(i ^ j for i, j in zip(x, y))

cipher = b'\x15\t\x02\x12\t\x1dT\x01:\x13\x07B\x15W\x01\x11R\x10\x01:\x05\x01V<\x1bC\x06W,\x04\x11F\x1c\x11;\x07\rP\x0c\x0f'

print(xor(cipher, b"secures"))
print(xor(cipher, b"secured"))
print(xor(cipher, b"securing"))
