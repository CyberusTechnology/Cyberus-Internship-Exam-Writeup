# Password cracker

### Description

Can you find the password?

### Author

momiji

### Points

50

# Write-up

Reading through the python script we can see that the program is checking for 
a correct input, without any encryption we can just print out the flag.

```python
password = [102, 108, 97, 103, 123, 119, 104, 52, 116, 95, 52, 95, 110, 49, 99, 51, 95, 100, 52, 121, 95, 116, 48, 95, 99, 114, 52, 99, 107, 95, 52, 95, 112, 52, 115, 115, 119, 48, 114, 100, 125]
print("".join(chr(i) for i in password))
```