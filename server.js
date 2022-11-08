"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import validate_token from "./routes/validate_token.js";
import vote from "./routes/vote.js";
import admin from "./routes/admin-api.js";
import user from "./routes/user.js";
import revalidate from "./routes/validate_token.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/validate_token", validate_token);
app.use("/api/vote", vote);
app.use("/api/admin", admin);
app.use("/api/user", user);
app.use("/api/revalidate_auth", revalidate);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

app.listen(process.env.PORT || 3001, function () {
  console.log("Server started at port 3001");
});
