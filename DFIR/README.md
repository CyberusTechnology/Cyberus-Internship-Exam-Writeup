# The Hidden Clue
**Description**: Somewhere behind the scenes of this desktop lies the flag. Explore, analyze, and think like a true investigator. Remember, not everything you see is what it seems. Can you uncover the hidden clue and find the flag? Begin your search... the answer is closer than you think!
**Category**: Forensics
**Author**: s3tt1ngs
**Difficulty**: Medium

1. First, extract the file water.7z.
2.  You will see folders and files.
![422ebd2b5a9fecb7e0931c7d11978b84.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/0affd8bfecfce190695e016410134304.png)
3. Check the contents of the files and folders; you might find some information to help you uncover a secret message.


![e508c0c68c8f2ac522e350f4c18e7c10.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/e508c0c68c8f2ac522e350f4c18e7c10.png)

![5ad477a6319af282ddc3e49541897351.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/5ad477a6319af282ddc3e49541897351.png)

4. Open the image file Thumbnail.png.
![d368f8a118160e94008ee426d5a8686c.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/d368f8a118160e94008ee426d5a8686c.png)
(hmmmm, no flag in here)

5. Now, we have files, folders, file names, and folder names. Try using some file names to search on Google.

![24a9bd2f808a434075d2ba94239b7867.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/24a9bd2f808a434075d2ba94239b7867.png)

6. Yeah! We should try opening it in Paint 3D.
7. But, how to open on Paint 3D? , We have all files.
8. Search again, Paint 3D is have many options to save file. but In this case, It's save like Project.
![f981ad2e7afdd8ac438ce3d61e7ea98b.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/f981ad2e7afdd8ac438ce3d61e7ea98b.png)

9. Go to folder path "%localappdata%\Packages\Microsoft.MSPaint_8wekyb3d8bbwe\LocalState\Projects"

![6da2f68cea1f98a21f3e93ac371ab405.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/6da2f68cea1f98a21f3e93ac371ab405.png)

10. Then You just copy  folders and files in folder challenge and past in this folder path "%localappdata%\Packages\Microsoft.MSPaint_8wekyb3d8bbwe\LocalState\Projects"

![1c48962b10a193a24cadd3e0f88e098b.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/1c48962b10a193a24cadd3e0f88e098b.png)

11. after that , open Program Paint 3D and open it.

![f8360c80326fef5c7396630bec3a5141.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/f8360c80326fef5c7396630bec3a5141.png)

12. it's 3D Project.
![0affd8bfecfce190695e016410134304.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/0affd8bfecfce190695e016410134304.png)

13. just move to get flag.

![becfc5f832d417434b237fb766c2b02e.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/becfc5f832d417434b237fb766c2b02e.png)


# Crazy Text 
Just change it to find out.


When I read file "Error.txt", hmmm , It's Look like Morse Code, binary? But, it's QR code.
![ae10b381d3265b7159252e2f58a8950b.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/ae10b381d3265b7159252e2f58a8950b.png)

Try To replace the hyphen (-) with a hash (#) in file.txt, you can use the following sed command:

```
sed -i 's/-/#/g' Error.txt
```

and Read file Error.txt again.

![5961f50a7a149a0b96f078cd1b715e90.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/5961f50a7a149a0b96f078cd1b715e90.png)

Yep, it looks like a QR code for sure
How many ways are there to get secrets from it?
It has more ways
- You can use https://merri.cx/qrazybox/ to recover it.
You can write Python code to change text into an image file, then scan it.
- Use a tool to decode it.

For this solve, I use https://github.com/waidotto/strong-qr-decoder

```
python2 sqrd.py Error.txt
```
and with -v

![bdeab0425b665f5043c473ae16afa9fc.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/bdeab0425b665f5043c473ae16afa9fc.png)

Something Wrong! , QR It looks strange.
Next, try reverse command .

![707aad839cbb6ab8c36a0a2bab677d36.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/DFIR/_resources/707aad839cbb6ab8c36a0a2bab677d36.png)
