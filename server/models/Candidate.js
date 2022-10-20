import mongoose from "mongoose";

const { Schema } = mongoose;

const candidateSchema = new Schema({
  name: String,
  candidateNumber: Number,
  voteCounter: { type: Number, default: 0 },
  date: Date,
});

const Candidate = new mongoose.model("candidate", candidateSchema);

export default Candidate;
