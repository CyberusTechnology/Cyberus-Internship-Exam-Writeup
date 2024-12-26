# Write Up
## Extract only .txt file
When we extract the directories we will see that there're 7
directories and each has 7 directories. It be like this 7
times, and there'll be some .txt in there , e.g.,
dir7/dir7/dir7/dir7/dir7/dir7/dir7/7.txt

We have to extract all .txt files and there're many way to
solve
Includes root\_directory, we have 8 depths.
```bash
tar --extract --gzip --file=file.tar --wildcards '*.txt' --strip-components=8
```

There're 45 files and each of them has one character of the flag. We need to print all of them.
```bash
for i in {0..45}; do cat "$i.txt"; done
```
