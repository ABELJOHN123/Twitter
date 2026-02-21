const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);
