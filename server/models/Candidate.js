import mongoose from "mongoose";

const { Schema } = mongoose;

const candidateSchema = new Schema({
  name: String,
  candidateNumber: Number,
  voteCounter: Number,
});

const Candidate = new mongoose.model("candidate", candidateSchema);

export default Candidate;
