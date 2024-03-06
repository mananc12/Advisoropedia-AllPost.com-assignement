const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },

  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log(error);
    next(error); // Pass the error to the next middleware
  }
});

// Check if the provided password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate a JWT token
userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      userID: this._id,
      userName: this.userName,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_TOKEN_EXPIRY,
    }
  );
};

const User = mongoose.model("User", userSchema);
module.exports = User;
