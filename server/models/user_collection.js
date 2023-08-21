const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  contacts: {
    phone: String,
    address: String,
  },
  userType: {
    type: String,
    enum: ["event organizer", "customer", "admin"],
    required: true,
  },
  bookings: [
    {
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
      rating: Number,
      comment: String,
    },
  ],
});


userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

const user_model = mongoose.model("user_collection", userSchema);

module.exports = user_model
