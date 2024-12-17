# asXORciative
### Description

Can you guess my secret key?

### Author

momiji

### Points

50

# Write-up

From reading the code, the encryption is just XOR operation, since we already know 
the flag format we can use `flag{` to leak out parts of the secret key. And we 
will get `b'secur{8`]ha.t0zw>qfAcm7[`%j6K\x7fw*}v@aa1kt'`, there we know that 
`secur` is part of the secret key, `secur` looks a lot like `secure` so we can 
try using it as a secret key and we will get `b'flag{x\'dYfu\'f2bd ur_ft$Yh&e"^ab#\x7fdIb~5oz'`,
still not complete, we can either bruteforce it and see if anything come up after adding 
a random byte to the key or guess the full word of the key since it seems like 
it is a word. Looking up dictionaries we can find that `secure` can be `secures`, 
`secured` and `securing`, we can try these three word and see if it reveals the flag. 
and `secured` is the right answer with a readable flag.

`flag{x0r_pr0p3rt1es_ar3_n1c3_ar3nt_th3y}`
