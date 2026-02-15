# Twitter Clone API 🚀

A simple Twitter-like REST API built using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

## 📌 Features

- User Signup
- User Signin
- Password Hashing
- JWT Authentication

---

## 🛠 Installation

### 1️⃣ Clone the repository

git clone https://github.com/ABELJOHN123/Twitter.git

### 2️⃣ Go into the project folder

cd Twitter

### 3️⃣ Install dependencies

npm install

### 4️⃣ Create a .env file in the root folder

Add:

MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key

### 5️⃣ Start the server

node server.js

Server will run on:

http://localhost:3000

---

## 📡 API Endpoints

### ➤ Signup
POST /signup

Body (JSON):
{
  "name": "Abel",
  "email": "abel@gmail.com",
  "password": "123456"
}

---

### ➤ Signin
POST /signin

Body (JSON):
{
  "email": "abel@gmail.com",
  "password": "123456"
}

---

## 📂 Project Structure

config/  
controller/  
model/  
server.js  

---

## 👨‍💻 Author

Abel John
