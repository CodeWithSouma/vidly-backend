# VIDLY-BACKEND
This project is the backend of Vidly, an imaginary video rental app.

### **API Endpoints**
* genres
* customers
* movies
* rentals
* users
* auth

***

### **GENRES API's sample request and response**

**GET REQUEST (Read Data)**

    http://localhost:3000/api/genres/

**RESPONSE**

    [
    {
        "_id": "5f6f50aab53731ef06d7c01b",
        "name": "thriller",
        "__v": 0
    }
    ]

**GET REQUEST WITH PASSING ID (Read Data)**

    http://localhost:3000/api/genres/5f6f50aab53731ef06d7c01b

**RESPONSE**

    {
    "_id": "5f6f50aab53731ef06d7c01b",
    "name": "thriller",
    "__v": 0
    }

**POST REQUEST (Create)**

    http://localhost:3000/api/genres/

**PASS A JSON OBJECT IN POSTMAN**

    {
    "name": "Romantic"
    }

**RESPONSE**

    {
    "_id": "5f71fff70ada96b9be73e7b2",
    "name": "Romantic",
    "__v": 0
    }

**PUT REQUEST (Update)**

    http://localhost:3000/api/genres/5f71fff70ada96b9be73e7b2

**PASS A JSON OBJECT IN POSTMAN**

    {
    "name": "Action"
    }

**RESPONSE**

    {
    "_id": "5f71fff70ada96b9be73e7b2",
    "name": "Action",
    "__v": 0
    }

**DELETE REQUEST**

    http://localhost:3000/api/genres/5f71fff70ada96b9be73e7b2

**RESPONSE**

    {
    "_id": "5f71fff70ada96b9be73e7b2",
    "name": "Action",
    "__v": 0
    }

### **CUSTOMERS API's sample request and response**

**GET REQUEST (Read Data)**

    http://localhost:3000/api/customers/

**RESPONSE**

    [
    {
        "isGold": true,
        "_id": "5f6f53afb53731ef06d7c01e",
        "name": "Souma Dey",
        "phone": "8768454982",
        "__v": 0
    }
    ]

**GET REQUEST WITH PASSING ID (Read Data)**

    http://localhost:3000/api/customers/5f6f53afb53731ef06d7c01e

**RESPONSE**

    {
    "isGold": true,
    "_id": "5f6f53afb53731ef06d7c01e",
    "name": "Souma Dey",
    "phone": "8768454982",
    "__v": 0
    }

**POST REQUEST (Create)**

    http://localhost:3000/api/customers/

**PASS A JSON OBJECT IN POSTMAN**

    {
    "name": "Soumik Nandi",
    "phone": "9547489233"
    }

**RESPONSE**

    {
    "isGold": false,
    "_id": "5f72057a0ada96b9be73e7b3",
    "name": "Soumik Nandi",
    "phone": "9547489233",
    "__v": 0
    }

**PUT REQUEST (Update)**

    http://localhost:3000/api/customers/5f72057a0ada96b9be73e7b3

**PASS A JSON OBJECT IN POSTMAN**

    {
    "isGold":false,
    "name": "Arijit Das",
    "phone": "9547489233"
    }

**RESPONSE**

    {
    "isGold": false,
    "_id": "5f72057a0ada96b9be73e7b3",
    "name": "Arijit Das",
    "phone": "9547489233",
    "__v": 0
    }

**DELETE REQUEST**

    http://localhost:3000/api/customers/5f72057a0ada96b9be73e7b3

**RESPONSE**

    {
    "isGold": false,
    "_id": "5f72057a0ada96b9be73e7b3",
    "name": "Arijit Das",
    "phone": "9547489233",
    "__v": 0
    }

### **MOVIES API's sample request and response**

**GET REQUEST (Read Data)**

    http://localhost:3000/api/movies/

**RESPONSE**

    [
    {
        "_id": "5f6f5180b53731ef06d7c01c",
        "title": "Ratsasant",
        "genre": {
            "_id": "5f6f50aab53731ef06d7c01b",
            "name": "thriller"
        },
        "numberInStock": 7,
        "dailyRentalRate": 10,
        "__v": 0
    }
    ]

**GET REQUEST WITH PASSING ID (Read Data)**

    http://localhost:3000/api/customers/5f6f5180b53731ef06d7c01c

**RESPONSE**

    {
        "_id": "5f6f5180b53731ef06d7c01c",
        "title": "Ratsasant",
        "genre": {
            "_id": "5f6f50aab53731ef06d7c01b",
            "name": "thriller"
        },
        "numberInStock": 7,
        "dailyRentalRate": 10,
        "__v": 0
    }

**POST REQUEST (Create)**

    http://localhost:3000/api/movies/

**PASS A JSON OBJECT IN POSTMAN**

    {
    "title":"Drishyam",
    "genreId":"5f6f50aab53731ef06d7c01b",
    "numberInStock":5,
    "dailyRentalRate":15
    }

**RESPONSE**

    {
    "_id": "5f720bf40ada96b9be73e7b6",
    "title": "Drishyam",
    "genre": {
        "_id": "5f6f50aab53731ef06d7c01b",
        "name": "thriller"
    },
    "numberInStock": 5,
    "dailyRentalRate": 15,
    "__v": 0
    }

**PUT REQUEST (Update)**

    http://localhost:3000/api/movies/5f720bf40ada96b9be73e7b6

**PASS A JSON OBJECT IN POSTMAN**

    {
    "title":"Kahaani",
    "genreId":"5f6f50aab53731ef06d7c01b",
    "numberInStock":5,
    "dailyRentalRate":10
    }

**RESPONSE**

    {
    "_id": "5f720bf40ada96b9be73e7b6",
    "title": "Kahaani",
    "genre": {
        "_id": "5f6f50aab53731ef06d7c01b",
        "name": "thriller"
    },
    "numberInStock": 5,
    "dailyRentalRate": 10,
    "__v": 0
    }

**DELETE REQUEST**

    http://localhost:3000/api/movies/5f720bf40ada96b9be73e7b6

**RESPONSE**

    {
    "_id": "5f720bf40ada96b9be73e7b6",
    "title": "Kahaani",
    "genre": {
        "_id": "5f6f50aab53731ef06d7c01b",
        "name": "thriller"
    },
    "numberInStock": 5,
    "dailyRentalRate": 10,
    "__v": 0
    }


### **RENTALS API's sample request and response**

**GET REQUEST (Read Data)**

    http://localhost:3000/api/rentals/

**RESPONSE**

    [
    {
        "_id": "5f6f79eb1076b31a6a3190e2",
        "customer": {
            "isGold": true,
            "_id": "5f6f53afb53731ef06d7c01e",
            "name": "Souma Dey",
            "phone": "8768454982"
        },
        "movie": {
            "_id": "5f6f5180b53731ef06d7c01c",
            "title": "Ratsasant",
            "dailyRentalRate": 20
        },
        "dateOut": "2020-09-26T17:27:07.102Z"
    }
    ]

**GET REQUEST WITH PASSING ID (Read Data)**

    http://localhost:3000/api/rentals/5f6f79eb1076b31a6a3190e2

**RESPONSE**

    {
        "_id": "5f6f79eb1076b31a6a3190e2",
        "customer": {
            "isGold": true,
            "_id": "5f6f53afb53731ef06d7c01e",
            "name": "Souma Dey",
            "phone": "8768454982"
        },
        "movie": {
            "_id": "5f6f5180b53731ef06d7c01c",
            "title": "Ratsasant",
            "dailyRentalRate": 20
        },
        "dateOut": "2020-09-26T17:27:07.102Z"
    }

**POST REQUEST (Create)**

    http://localhost:3000/api/rentals/

**PASS A JSON OBJECT IN POSTMAN**

    {
    "movieId":"5f6f5180b53731ef06d7c01c",
    "customerId":"5f6f53afb53731ef06d7c01e"
    }

**RESPONSE**

    {
    "_id": "5f72101a0ada96b9be73e7c1",
    "customer": {
        "isGold": true,
        "_id": "5f6f53afb53731ef06d7c01e",
        "name": "Souma Dey",
        "phone": "8768454982"
    },
    "movie": {
        "_id": "5f6f5180b53731ef06d7c01c",
        "title": "Ratsasant",
        "dailyRentalRate": 20
    },
    "dateOut": "2020-09-28T16:32:26.037Z"
    }

### **USERS API's sample request and response**

**POST REQUEST (Create/Register)**

    http://localhost:3000/api/users/

**PASS A JSON OBJECT IN POSTMAN**

    {
    "name":"Soumadip Dey",
    "email":"souma.smit@gmail.com",
    "password":"12345"
    }

**RESPONSE**

    {
    "_id": "5f72dbe67bf17507ec0202ea",
    "name": "Soumadip Dey",
    "email": "souma.smit@gmail.com"
    }

### **AUTH API's sample request and response**

    **POST REQUEST (Create/Register)**

    http://localhost:3000/api/auth/

**PASS A JSON OBJECT IN POSTMAN**

    {
    "email":"souma.smit@gmail.com",
    "password":"12345"
    }

**RESPONSE (JSON WEB TOKEN/JWT)**

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjcyZDk4ZDdiZjE3NTA3ZWMwMjAyZTkiLCJpYXQiOjE2MDEzNjQyNzd9.k1GiiyEMUSbDFVqqJWmo8hsLfMQTXNas5eiJfck_RBg
