# RS-Clone

## API

Работа с сервером ведется через [корень]/api
Пример: "http://localhost:3000/api/auth/register"

### **_Аутентификация_**

Для работы с аутентификацией в URI добавляется /auth

#### **registration**

Регистрирует пользователя, логин обязательно дольжен быть уникальным, длина пароля минимум 6 символов

<details>

- **URL**

  /register

- **Method:**

  `POST`

- **Headers:**

  `'Content-Type': 'application/json'`

- **Data Params**

  ```typescript
    {
      login: string,
      password: string
    }
  ```

- **Success Response:**

  - **Code:** 201 OK <br />
    **Content:**

    ```json
    {
      "message": "Пользователь создан"
    }
    ```

</details>

---

#### **login**

Осуществляет вход в систему для пользователя, возвращает токен с жизнью в 1 час, токен надо сохранить в localStorage/sessionStorage
и отправлять его в хедере в поле "Authorization"

<details>

- **URL**

  /login

- **Method:**

  `POST`

- **Headers:**

  `'Content-Type': 'application/json'`

- **Data Params**

  ```typescript
    {
      login: string,
      password: string
    }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    {
      "message": "Вы успешно вошли в систему",
      "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InRlc3QiLCJ1c2VySWQiOiI2M2VlNWUzYjk4N2UzZmJlNTI0YWI2ZjAiLCJpYXQiOjE2NzY1NjYwODAsImV4cCI6MTY3NjU2OTY4MH0.3667GnwsbX7CR3PYSbu6ZYapXwJHG3Yz1O_jNWwIIa8"
    }
    ```

## </details>

---

### **_Работа с пользователем_**

Для работы с пользователем в URI добавляется /user

#### **get**

Возвращает информацию о пользователе, выдает время в секундах, прошедшее с POST запроса

<details>

- **URL**

  /get

- **Method:**

  `GET`

- **Headers:**

  `'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InRlc3QiLCJ1c2VySWQiOiI2M2VlNWUzYjk4N2UzZmJlNTI0YWI2ZjAiLCJpYXQiOjE2NzY1NjYwODAsImV4cCI6MTY3NjU2OTY4MH0.3667GnwsbX7CR3PYSbu6ZYapXwJHG3Yz1O_jNWwIIa8'`

- **Data Params**

  `NONE`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    {
      "message": "Данные получены",
      "data": {
        "boosters": {
          "doubleCost": 2,
          "changeSpeed": 3,
          "blow": 0
        },
        "factories": {
          "factoryS": {
            "bought": false,
            "level": 0
          },
          "factoryM": {
            "bought": true,
            "level": 0
          },
          "factoryL": {
            "bought": false,
            "level": 0
          }
        },
        "cookiesCount": 2
      },
      "timeHasPassed": 9
    }
    ```

</details>

---

#### **getAll**

Возвращает массив объектов пользователей с логином и их кол-вом печенек

<details>

- **URL**

  /get

- **Method:**

  `GET`

- **Headers:**

  `NONE`

- **Data Params**

  `NONE`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    {
      "message": "Данные получены",
      "data": [
        {
          "login": "test1",
          "cookies": 25
        },
        {
          "login": "test2",
          "cookies": 2
        }
      ]
    }
    ```

</details>

---

#### **post**

Изменяет данные пользователя, автоматический запоминает время выполнения данного запроса

<details>

- **URL**

  /post

- **Method:**

  `POST`

- **Headers:**

  `'Content-Type': 'application/json'`
  `'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InRlc3QiLCJ1c2VySWQiOiI2M2VlNWUzYjk4N2UzZmJlNTI0YWI2ZjAiLCJpYXQiOjE2NzY1NjYwODAsImV4cCI6MTY3NjU2OTY4MH0.3667GnwsbX7CR3PYSbu6ZYapXwJHG3Yz1O_jNWwIIa8'`

- **Data Params**

  ```json
  {
    "data": {
      "boosters": {
        "doubleCost": 2,
        "changeSpeed": 3,
        "blow": 0
      },
      "factories": {
        "factoryS": {
          "bought": false,
          "level": 0
        },
        "factoryM": {
          "bought": true,
          "level": 0
        },
        "factoryL": {
          "bought": false,
          "level": "asdas"
        }
      },
      "cookiesCount": 25
    }
  }
  ```

- **Success Response:**

  - **Code:** 202 OK <br />
    **Content:**

    ```json
    {
      "message": "Данные обновлены",
      "updatedUser": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
      }
    }
    ```

</details>

---
