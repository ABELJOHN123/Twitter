const Tweet = require("../model/tweet");
const User = require("../model/user");

/* =========================
   CREATE TWEET
========================= */
exports.createTweet = async (req, res) => {
  try {
    const { message, userId } = req.body;

    // Check user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Create tweet
    const tweet = await Tweet.create({
      message,
      userId
    });

    // Push tweet id into user
    user.tweets.push(tweet._id);
    await user.save();

    res.status(201).json({
      success: true,
      tweet
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


/* =========================
   GET TWEETS BY USER
========================= */
exports.getTweetsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const tweets = await Tweet.find({ userId });

    res.json({
      success: true,
      count: tweets.length,
      tweets
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
