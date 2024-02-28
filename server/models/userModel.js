const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 40 },
    email: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 40,
      unique: true,
    },
    password: { type: String, required: true, minLength: 6, maxLength: 20 },
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
