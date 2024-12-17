def xor(a):
    return [i ^ 39 for i in a]

flag = b"flag{my_obssesion_with_vocaloid_is_getting_out_of_hand}"
xor_flag = xor(flag)
hex_xor_flag = [hex(i) for i in xor_flag]
print(" ".join(hex_xor_flag))
