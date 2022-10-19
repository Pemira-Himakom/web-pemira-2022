import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema({
  NIM: String,
  name: String,
  token: String,
  voted: Boolean
});

const Student = new mongoose.model("student", studentSchema);

export default Student;
