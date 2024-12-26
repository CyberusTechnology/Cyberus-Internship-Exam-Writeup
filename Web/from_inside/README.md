# Title: From_Inside
### Description
Have you ever heard about forbidden technique that ancient people used to hack the website? I heard that they can send a request from outside to inside(internal) through the same hole as a normal request to the server... Hmmm, This is so interesting...

### Author
0xJ0cKkY

### Points
50

# Write-up


- when enter the website you will see the source code, everything is there, if you read the code carefully you will know that there is a path name `/ssrf` with parameter `path`, and the port 1001 and 10011 was declared on the website but only can access from the localhost 
- try to access the website using the path with the parameter we knew with empty input we will see the emoji flag scrolling around
- input random value we will see the error, after reading the error we will know that the website will get user input to add to `http://localhost:1001` before sending to the server and it seems like we can access to the localhost using this vulnerability, as we know there are port 10011 on the localhost
- try to input `1` we will get the path /flag
- try to input `1/flag` and we will get the flag


# final payload:
```
#!/bin/bash
curl 'http://IP:PORT/ssrf?path=1/flag'
```