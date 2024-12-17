# Admin

### Description

Only admin is allow to read the flag, can you read it somehow?

### Author

momiji

### Points

50

# Write-up

```c
char username[50];
int is_admin = 0;

printf("What is your name? ");
scanf("%s", username);

if (is_admin != 0) { }
```

Observing the source code we can see that there is a buffer overflow with scanf
from receiving input without limit and the buffer is above the int for `is_admin`, 
so we just have to input some random garbage until it fills out the variable.
