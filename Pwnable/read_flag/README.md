# read-flag

### Description

Hey, if you want the flag, talk to me nicely and I might give it to you.

### Author

momiji

### Points

50

# Write-up

Reading the source code we can see that there is a format string vulnerability.

```c
puts("Can you read the flag?");
puts("I might give you the flag if you asked me politely.");
puts("What do you want to say?");

fgets(buf, 50, stdin);
printf(buf);
```

We also see that the flag is read into somewhere in the heap but if you look closely
we can also notice that pointer to the flag is left on the stack.

```c
FILE* f;
f = fopen("flag.txt", "r");

if (f == NULL) {
    printf("WHERE DID THE FLAG GO?");
    exit(0);
}

char* loc = malloc(100);
fread(loc, 100, 1, f);
```

With this we can use format string to point into a specific location in the stack 
where the pointer is and use `%s` to print the content from the pointer and a string.

We can calculate percisely what arguement position is but i will leave it for you 
to figure it out yourself from reading [this pdf document](https://courses.cs.washington.edu/courses/cse378/10au/sections/Section1_recap.pdf) 
or `solve.py` within this directory.
