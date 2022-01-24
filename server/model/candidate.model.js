import mongoose, { Schema, Types } from "mongoose";

const candidateSchema = Schema(
  {
    manifesto: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

const Candidate = mongoose.Schema("candidates", candidateSchema);

export default Candidate;
