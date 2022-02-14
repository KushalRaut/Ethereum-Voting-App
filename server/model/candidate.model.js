import mongoose from "mongoose";
const Schema = mongoose.Schema;

const candidateSchema = mongoose.Schema(
  {
    partyImage: {
      type: String,
    },
    partyName: {
      type: String,
    },
    partySymbol: {
      type: String,
    },
    manifestoWords: {
      type: String,
    },
    manifestoDescription: {
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

const Candidate = mongoose.model("candidates", candidateSchema);

export default Candidate;
