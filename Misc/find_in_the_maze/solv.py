import os

os.system("find root_directory/ -name \"*.txt\" > output.txt")
f = open('output.txt')
dflag = {}

l = f.readline().strip()
while l:
    filename = l.split('/')[-1]
    index = filename.split('.')[0]
    fflag = open('../'+l)
    char = fflag.read()
    fflag.close()
    dflag[int(index)] = char
    l = f.readline().strip()

flag = ''
for i in range(len(dflag.keys())):
    flag += dflag[i]

print(flag)
