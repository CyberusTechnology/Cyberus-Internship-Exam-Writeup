#include <stdio.h>
#include <string.h>
#include <stdlib.h>

//gcc -no-pie -Wno-deprecated-declarations -Wno-implicit-function-declaration vuln.c -o vuln

void setup(){
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);
}

void win() {
    char flag[50];

    puts("WHAT? HOW DID YOU GET HERE");
    puts("Anyway, have this");

    FILE* f;
    f = fopen("flag.txt", "r");

    if (f == NULL) {
        printf("WHERE DID THE FLAG GO?");
        exit(0);
    }

    fread(flag, 50, 1, f);
    puts(flag);
    
    fclose(f);
    exit(0);
}

void reverse(char* str) {
    int first = 0;
    int last = strlen(str) - 1;
    char temp;

    while (first < last) {
      
        temp = str[first];
        str[first] = str[last];
        str[last] = temp;

        first++;
        last--;
    }
}

int main() {
    setup();

    char arr[100];
    printf("Enter your string: ");
    gets(arr);
    reverse(arr);
    printf("Reversed: %s", arr);
    return 0;
}
