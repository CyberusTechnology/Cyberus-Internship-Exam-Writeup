#include <stdio.h>
#include <unistd.h>
#include <time.h>
#include <stdlib.h>

#define STR(x) #x

#define FLAG "flag{----------------------------------------}"
#define FLAG_PRICE 1800000000
#define HALF_FLAG "flag{------------------"
#define HALF_FLAG_PRICE 1
#define MAX_BORROW 20000000000000000

unsigned long point = 0;
unsigned long debt = 0;
char bought_half_flag = 0;

void setup(){
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);
}

void roll_the_dice(){
    int first_die = rand() % 6 + 1;
    int second_die = rand() % 6 + 1;
    int total_points = first_die + second_die;
    point += total_points;
    printf("Your dice are: %d and %d\n", first_die, second_die);
    sleep(1);
    printf("You've got %d points\n", total_points);
}


void allflag() {
    if (debt > 0) {
        puts("You should pay debt first");
    } else if (point < FLAG_PRICE) {
        puts("Your point isn't enough. Please collect more.");
    } else {
        point -= FLAG_PRICE;
        printf("The flag is: %s\n", FLAG);
    }
}

void partflag() {
    if (bought_half_flag) {
        puts("Sorry, you can only buy it once");
    } else

    if (point < HALF_FLAG_PRICE) {
        puts("Your point isn't enough. Please collect more.");
    } else {
        bought_half_flag = 1;
        point -= HALF_FLAG_PRICE;
        printf("The flag(half) is: %s\n", HALF_FLAG);
    }
}

void flagchoice() {
    unsigned c;
    puts("What do you want to buy");
    puts("\t1 The whole flag");
    puts("\t2 Half of the flag");
    printf("Select your choice: ");
    scanf("%u", &c);
    switch(c) {
        case 1:
            allflag();
            break;
        case 2:
            partflag();
            break;
        default:
            puts("Your choice wasn't correct");
            break;
    }
}

void borrow() {
    unsigned long input;
    printf("\nHow many points do you want to borrow (maximum is %lu each time) : ", MAX_BORROW);
    scanf("%lu", &input);
    if (input > MAX_BORROW) {
        puts("You can't borrow that much\n");
        return;
    } else {
        debt += input;
        point += input;
    }
}

void paydebt() {
    unsigned long input;
    printf("How much do you want to pay your debt: ");
    scanf("%lu", &input);
    if (point < input)
        puts("You don't have enough points");
    else {
        debt -= input;
        point -= input;
    }

}

int main() {
	setup();
    srand(time(0));
    
    unsigned choice;
    printf("\n---------------------------------------------------\n");
    printf("|Welcome to flag shop!                            |\n");
    printf("|You can buy flag we you just have enough point   |\n");
    printf("---------------------------------------------------\n");

    while(1) {
        printf("\n\nYour point: %lu\n", point);
        if(debt)
        printf("Your debt: %lu\n", debt);
        printf("\t1 Buy flag\n");
        printf("\t2 Roll the dice\n");
        printf("\t3 Borrow point\n");
        printf("\t4 Pay debt\n");
        printf("Select your choice: ");
        scanf("%u", &choice);
        switch(choice) {
            case 1:
                flagchoice();
                break;
            case 2:
                roll_the_dice();
                break;
            case 3:
                borrow();
                break;
            case 4:
                paydebt();
                break;
            default:
                puts("Your choice was not correct");
                break;
        }
    }
    return 0;
}
