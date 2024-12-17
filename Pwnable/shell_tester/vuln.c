#include <stdio.h>

int main() {
    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);

    char format[50];
    char buf[100];

    puts("Hello, how may I help you?");
    fgets(format, 50, stdin);

    printf(format);

    puts("Do you want to tell me something?");
    fgets(buf, 0x1337, stdin);

    puts("Goodbye");

    return 0;
}
