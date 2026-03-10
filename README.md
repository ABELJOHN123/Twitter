
.

🐦 Twitter Clone API (Backend)

A backend REST API for a Twitter-like social media platform where users can register, login, create tweets, like posts, and interact with other users.
The project is built using Node.js, Express, and MongoDB with secure authentication.

🚀 Features

User Registration and Login

JWT Authentication

Create, Read, Update, and Delete Tweets

Like and Unlike Tweets

User Profile Management

Secure API Endpoints

MongoDB Database Integration

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JSON Web Token (JWT)

API Testing: Postman

Version Control: Git & GitHub

📂 Project Structure
twitter-api
│
├── controllers
│   └── tweetController.js
│
├── models
│   └── Tweet.js
│   └── User.js
│
├── routes
│   └── tweetRoutes.js
│   └── authRoutes.js
│
├── middleware
│   └── authMiddleware.js
│
├── config
│   └── db.js
│
├── server.js
└── package.json
⚙️ Installation

1️⃣ Clone the repository

git clone https://github.com/yourusername/twitter-api.git

2️⃣ Install dependencies

npm install

3️⃣ Start the server

npm start

Server runs on:

http://localhost:5000
📌 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user
Tweets
Method	Endpoint	Description
POST	/api/tweets	Create a tweet
GET	/api/tweets	Get all tweets
DELETE	/api/tweets/:id	Delete a tweet
POST	/api/tweets/:id/like	Like a tweet
🔒 Authentication

Protected routes use JWT token authentication.

Example header:

Authorization: Bearer <token>
📬 API Testing

All endpoints were tested using Postman to ensure proper request and response handling.
