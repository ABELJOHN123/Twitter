const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  retweetCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Tweet", tweetSchema);