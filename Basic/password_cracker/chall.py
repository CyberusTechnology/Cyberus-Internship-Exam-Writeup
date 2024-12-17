def check(inp):
    password = [102, 108, 97, 103, 123, 119, 104, 52, 116, 95, 52, 95, 110, 49, 99, 51, 95, 100, 52, 121, 95, 116, 48, 95, 99, 114, 52, 99, 107, 95, 52, 95, 112, 52, 115, 115, 119, 48, 114, 100, 125]

    if len(inp) != len(password):
        return False

    for i in range(len(password)):
        if inp[i] != password[i]:
            return False

    return True


if __name__ == "__main__":
    user_input = input("What is the password: ").encode("ascii")
    if check(user_input):
        print("Wow congrats, Your flag is the password")
    else:
        print("Wrong password!")
