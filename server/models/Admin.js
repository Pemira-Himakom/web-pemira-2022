import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema({
    username: String,
    password: String
})

const Admin = new mongoose.model("admin", adminSchema);

export default Admin