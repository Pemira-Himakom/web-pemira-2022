"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import validate_token from "./routes/validate_token.js";
import vote from "./routes/vote.js";
import admin from "./routes/admin-api.js";
import user from "./routes/user.js";

const app = express();
app.use(express.json());

app.use("/api/validate_token", validate_token);
app.use("/api/vote", vote);
app.use("/api/admin", admin);
app.use("/api/user", user);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

app.listen(process.env.PORT || 3001, function () {
  console.log("Server started at port 3001");
});
