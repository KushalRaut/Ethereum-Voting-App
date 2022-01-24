import mongoose, { Schema } from "mongoose";

const adminSchema = Schema(
  {
    chatBotQuestions: [{ type: String }],
    user: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);
