# Twitter Clone Backend API

This project is a backend REST API for a Twitter-like social media application. It allows users to register, login, create tweets, like tweets, and manage their posts. The system is built using Node.js, Express.js, and MongoDB with JWT authentication for security.

The project demonstrates backend development concepts such as API design, authentication, database integration, and CRUD operations.

--------------------------------------------------

Features

• User Registration  
• User Login with JWT Authentication  
• Secure API Endpoints using Middleware  
• Create Tweet  
• View All Tweets  
• Delete Tweet  
• Like and Unlike Tweets  
• MongoDB Database Integration  
• RESTful API Architecture  

--------------------------------------------------

Tech Stack

Backend: Node.js, Express.js  
Database: MongoDB  
Authentication: JSON Web Token (JWT)  
Testing: Postman  
Version Control: Git & GitHub  

--------------------------------------------------

Project Structure

twitter-project
|
|-- controllers
|     tweetController.js
|
|-- models
|     User.js
|     Tweet.js
|
|-- routes
|     authRoutes.js
|     tweetRoutes.js
|
|-- middleware
|     authMiddleware.js
|
|-- config
|     db.js
|
|-- server.js
|-- package.json

--------------------------------------------------

API Endpoints

Authentication

POST /api/auth/register  
Register a new user

POST /api/auth/login  
Login user and receive JWT token

Tweets

POST /api/tweets  
Create a new tweet

GET /api/tweets  
Get all tweets

DELETE /api/tweets/:id  
Delete a tweet

POST /api/tweets/:id/like  
Like or unlike a tweet

--------------------------------------------------

Authentication

Protected routes require a JWT token.

Example Header:

Authorization: Bearer <your_token>

--------------------------------------------------

How to Run the Project

1. Clone the repository

git clone https://github.com/yourusername/twitter-project.git

2. Install dependencies

npm install

3. Start the server

npm start

Server runs on:
http://localhost:5000

--------------------------------------------------

What I Learned from This Project

• Building REST APIs using Node.js and Express  
• Implementing JWT authentication  
• Creating secure backend routes  
• Connecting Node.js with MongoDB  
• Handling CRUD operations  
• Structuring backend applications properly  

--------------------------------------------------

Author

Abel John  
Frontend and Backend Developer  

Skills: React, Node.js, Python, HTML, CSS, JavaScript
