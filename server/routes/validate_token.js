"use strict";

import express from "express";
import Student from "../models/Student.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { inputNIM, inputToken } = req.body;

    const studentFound = await Student.findOne({ NIM: inputNIM });

    if (!studentFound) {
      throw new Error("Incorrect NIM!");
    }

    if (!studentFound.token) {
      throw new Error("Student doesn't have a token assigned");
    }

    if (studentFound.voted) {
      throw new Error("Student already voted");
    }

    const result = await bcrypt.compare(inputToken, studentFound.token);

    if (!result) {
      throw new Error("Incorrect Token");
    }

    res.json({
      status: true,
      message: "Successful authenticaton! Proceed to vote.",
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

//jwt
router.route("/jwt").post((req, res) => {
  // Authenticate User
  const { username } = req.body;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accesstoken: accessToken });
});

// middleware
// function authenticateToken((req,res,nex) =>{

// });

export default router;
