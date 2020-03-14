import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10; // make a salt having 10 length.

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: String,
  tokenExp: Number
});

userSchema.pre("save", function(next) {
  let user = this;
  console.log(user);
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, hashPassword) => {
        if (err) return next(err);

        user.password = hashPassword;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);

export default User;
