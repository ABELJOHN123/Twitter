const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authController = require("./controller/authController");
const tweetController = require("./controller/tweetcontroller");

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.log("❌ DB Error:", err));


// ----------------------
// ROUTES
// ----------------------

// Prefix auth routes
app.post("/api/auth/signup", authController.signup);
app.post("/api/auth/signin", authController.signin);

// Tweet routes
app.post("/api/tweet", tweetController.createTweet);
app.get("/api/tweet/:userId", tweetController.getTweetsByUser);

// Default route for testing server
app.get("/", (req, res) => {
  res.json({ success: true, message: "Server is running" });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
