#include <stdio.h>
#include <stdlib.h>

void setup() {
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);
}

void read_flag() {
    char buf[50];

    FILE* f;
    f = fopen("flag.txt", "r");

    if (f == NULL) {
        printf("WHERE DID THE FLAG GO?");
        exit(0);
    }

    char* loc = malloc(100);
    fread(loc, 100, 1, f);

    puts("Can you read the flag?");
    puts("I might give you the flag if you asked me politely.");
    puts("What do you want to say?");

    fgets(buf, 50, stdin);
    printf(buf);

    puts("Did you get the flag?");
    puts("If so then, Well done!");
    puts("Goodbye!");

    free(loc);
    exit(0);
}

int main() {
    setup();
    read_flag();
}
