<h1>Kacper Bartodziejski | 76121 | ARIT1</h1>

<h3>Ćw 1</h3>
Sprawdzone przy użyciu: <a href="https://replit.com/languages/nodejs">Replit</a>

```
'use strict';

let data = 'kacper';
let buff = new Buffer.from(data);
let base64data = buff.toString('base64');

console.log('"' + data + '" po zaszyfrowaniu przez Base64 to "' + base64data + '"');
```

<h3>Ćw 2</h3>
Sprawdzone przy użyciu: <a href="https://replit.com/languages/python3">Replit</a>

```
import secrets
import string

#definiujemy alfabet
letters = string.ascii_letters
digits = string.digits
special_chars = string.punctuation

alphabet = letters + digits + special_chars

#ustalamy dlugosc hasla
pwd_length = 12

#generujemy haslo
while True:
  pwd = ''
  for i in range(pwd_length):
    pwd += ''.join(secrets.choice(alphabet))

  if (any(char in special_chars for char in pwd) and 
      sum(char in digits for char in pwd)>=2):
          break
print(pwd)
```
