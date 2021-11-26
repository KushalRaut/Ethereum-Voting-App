import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    citizenship_no: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_No: {
      type: String,
      required: true,
    },
    pictureURL: {
      type: String,
    },
    user_type: {
      type: String,
      required: true,
      default: "voter",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
