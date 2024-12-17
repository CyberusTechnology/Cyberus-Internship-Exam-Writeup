#include <stdio.h>
#include <stdlib.h>

int main() {
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);

    char username[50];
    int is_admin = 0;

    printf("What is your name? ");
    scanf("%s", username);

    if (is_admin != 0) {
        FILE* f;
        char flag[50];
        f = fopen("flag.txt", "r");

        if (f == NULL) {
            printf("WHERE DID THE FLAG GO?");
            exit(0);
        }

        fread(flag, 50, 1, f);
        puts("Welcome Admin!, here is your flag");
        puts(flag);
        fclose(f);
        exit(0);
    }

    puts("Welcome User! There is no features currently so the program will shutdown now!");
    return 0;
}
