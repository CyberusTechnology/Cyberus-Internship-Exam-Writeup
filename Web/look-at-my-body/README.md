# Look at my body
### Description
My company has implemented a new tech stack, which they claim is highly secure. Can you test it and verify its security?

### Author
0x0b

### Points
100

# Write-up

ເມື່ອເຂົ້າມາໃນເວັບທຳອິດ ຈະເຫັນໜ້າ login ໂດຍທີ່ credential ຈະສາມາດເຫັນໄດ້ດ້ວຍການທາສີໜ້າເວັບ ຫຼື inspect ເບິ່ງ source code
![2ac6822b-fa58-45aa-8c2e-c982acf30374.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/2ac6822b-fa58-45aa-8c2e-c982acf30374.png)

ນອກຈາກນີ້ຍັງມີ file `main.js` ທີ່ເຫັນໃນ source code ໜ້າທຳອີດ ເມື່ອກົດເຂົ້າໄປເບິ່ງຈະເຫັນວ່າມີການສົ່ງ request ໄປຫາ path `/graphql` ແປວ່າ website ນີ້ໄດ້ນຳໃຊ້ [GraphQL](https://graphql.org/learn/)

![50bb7bdc-68d6-4117-bdfd-d7a4ca9b68c2.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/50bb7bdc-68d6-4117-bdfd-d7a4ca9b68c2.png)

ເມື່ອເຮົາໄປ path `/graphql` ຈະມີເມນູຢູ່ທາງເບື້ອງຊ້າຍ ໂດຍຈະມີ doc ແລະ schema [reference](https://graphql.org/learn/schema/)

![5ff880d0-e62a-4f52-b7ec-d389280fd63c.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/5ff880d0-e62a-4f52-b7ec-d389280fd63c.png)

ເຫັນວ່າມີ schema ທີ່ເປັນ flag ຢູ່ ແລ້ວເຮົາຈະເອົາ flag ໄດ້ແນວໃດ?

ໃນ GraphQL ຈະມີວິທີ query ທີ່ຕ່າງຈາກ REST API [ອ່ານເພີ່ມເຕີມ](https://graphql.org/learn/queries/) ເຊິ່ງພາຍຫຼັງເຮົາ login ເຂົ້າເວັບແລ້ວ ຈະມີຕົວຢ່າງການ query ໃຫ້ເບິ່ງ

ເມື່ອ login ເຂົ້າມາຈະເຫັນວ່າມີເມນູ Home, Books, Flag? ແລະ logout

![c7e51fff-d29b-45b9-90a4-a51e2125a551.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/c7e51fff-d29b-45b9-90a4-a51e2125a551.png)

ໂດຍເມື່ອເຮົາ inspect ເບິ່ງ source code ໃນໜ້າ Books ຈະເຫັນວ່າມີ file `books.js`

![bcb07a17-57d0-4455-bf88-046510875e0a.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/bcb07a17-57d0-4455-bf88-046510875e0a.png)

ຖ້າໃຊ້ Burp ກໍຈະສັງເກດໄດ້ງາ່ຍກວ່າ

![3c7a4c1d-fe25-482c-8dd4-dae9da785c88.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/3c7a4c1d-fe25-482c-8dd4-dae9da785c88.png)

ຈາກ schema ທີ່ເຮົາເຫັນໃນໜ້າ `/grahpql` ເຮົາສາມາດ query ເອົາ flag ໄດ້ໂດຍການໃຊ້ request body ແບບນີ້

```
{ flag { value message } }
```

![8c9247cf-5d58-452d-aae7-72a91ddbdea3.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/8c9247cf-5d58-452d-aae7-72a91ddbdea3.png)

response `Only secret-user!!` ດັ່ງນັ້ນ ເຮົາກໍ query ຫາ `secret-user`

```
{ users { id username password } }
```

![8b3be94d-f7ac-4d06-9990-2f1c45c664f5.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/8b3be94d-f7ac-4d06-9990-2f1c45c664f5.png)

ນຳໄປ credential ໄປ login ໃໝ່ (ມີຕົວຢ່າງການ query ຢູ່ໜ້າ login ແລະ ສາມາດນຳໃຊ້ Burp Repeater ໃນການ query ຊ້ຳໄດ້)

```
{"query":"mutation Login ($uname: String!, $pass: String!){\n        login (username: $uname, password: $pass) {\n            token\n        }\n    }","variables":{"uname":"secret-user","pass":"this_password_is_very_hard_to_guess!"}}
```

![d2a6b2da-511f-48e5-ab7d-59c5255a9ac8.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/d2a6b2da-511f-48e5-ab7d-59c5255a9ac8.png)

ເອົາ token ທີ່ໄດ້ໄປແທນ Cookie ໂຕເກົ່າ ແລ້ວ query ເອົາ flag ໃໝ່

![c1143e40-8a37-4289-be2f-0b47089607bd.png](https://raw.githubusercontent.com/CyberusTechnology/Cyberus-Internship-Exam-Writeup/refs/heads/2024/Web/look-at-my-body/_resource/c1143e40-8a37-4289-be2f-0b47089607bd.png)
