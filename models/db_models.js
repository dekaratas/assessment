const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  pseudonym: String,
  username: { type: String, unique: true},
  password: String,
  hometown: String,
});

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  isbn: String,
  price: Number
});

userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = mongoose.model("User", userSchema);
const Book = mongoose.model("Book", bookSchema);

module.exports = { User, Book};