import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = mongoose.Schema(
  {
    chatBotQuestions: [{ type: String }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("admin", adminSchema);

export default Admin;
