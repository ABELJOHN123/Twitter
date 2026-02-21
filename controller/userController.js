const User = require("../model/user");

exports.createUser = async (req, res) => {
  try {
    const { username } = req.body;

    const user = await User.create({ username });

    res.status(201).json({
      success: true,
      user
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
