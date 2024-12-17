# Magic
### Description

Magic encryption, or is it?

### Author

momiji

### Points

150

# Write-up

We are given a python file, from reading the file we can see that the flag length 
is 29 characters and there is a random but it has fixed seed so it is not quite 
random, there is an operation going on to compare the flag with the `magic` value.

Since it has a lot of checks we can use z3 solver to prove the theorem (those checks)
by adding the rules into z3 and get z3 output to check if the flag is indeed correct.

Script can be found in `solve.py`.

You can solve this challenge without z3, take that as a challenge and good luck!
