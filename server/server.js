"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import Student from "./models/students.js";

const app = express();
app.use(express.json());

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

app.get("/", (req, res) => {
  const newStudent = new Student({
    NIM: "NIM1",
    name: "name1",
    token: "token1",
  });

  res.send("Hello World!");
});

app.listen(process.env.PORT || 5000, function () {
  console.log("Server started at port 5000");
});
