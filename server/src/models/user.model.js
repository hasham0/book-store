import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    password: {
      type: String,
      select: false,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: false,
    },
    refershToken: {
      select: false,
      type: String, //! jwt token_
    },
  },
  {
    timestamps: true,
  }
);

// note: hashing password:
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcryptjs.genSalt(process.env.SALT_ROUNDS);
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

// note: compare password:
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

// note: generate access token:
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

// note: generate refersh token:
userSchema.methods.generateRefershToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFERSH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFERSH_TOKEN_EXPIRY,
    }
  );
};

const User = model["User"] || model("User", userSchema);

export default User;
