# net and cat
### Description

cat you read the flag?

### Author

momiji

### Points

50

# Write-up

Challenge name gave a big hint that it is indeed a netcat. After connecting to 
the server, you will be dropped into a shell where flag file is hidden using the 
name `.flag.txt`, you can use `ls -la` to list out everything in the directory 
or using `find` command to find every file that has the flag format.
