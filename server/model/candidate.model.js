<<<<<<< HEAD
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
=======
// import mongoose from "mongoose";

// const candidateSchema = mongoose.Schema(
//   {
//     manifesto: {
//       type: String,
//     },
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: "users",
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Candidate = mongoose.Schema("candidates", candidateSchema);
>>>>>>> ca5320d6043d2df83b22b9de41e971bb01698e6a

// export default Candidate;
