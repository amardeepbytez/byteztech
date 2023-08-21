const user_model = require("./../../models/user_collection.js");

async function registerUser(req, res) {
  try {
    const { email, username } = req.body;
    console.log(email, username)
    const existingUser = await user_model.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      return res.status(400).json({
        error:
          existingUser.email === email
            ? "You have already registered with this email"
            : "This username is already taken",
      });
    }
    const data = new user_model(req.body);
    const value = await data.save();
    res.status(200).json({ message: "Registered Succesfully" });
    console.log("regis pass: ", req.body.password);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: "Failed to register" });
  }
}

module.exports = registerUser;
