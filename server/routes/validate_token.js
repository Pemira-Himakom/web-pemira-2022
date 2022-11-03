"use strict";

import express from "express";
import Student from "../models/Student.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.route("/").post((req, res) => {
  const { inputNIM, inputToken } = req.body;

  Student.findOne({ NIM: inputNIM }, (err, studentFound) => {
    if (err) {
      console.log(err);
    } else {
      // check if studentFound.token exists
      if (studentFound === null) {
        res.json({ status: false, message: "Student not found" });
      } else {
        if (studentFound.token) {
          // if student has a token assigned
          if (studentFound.voted) {
            // if student has already voted
            res.json({ status: false, message: "Student already voted!" });
          } else {
            bcrypt.compare(inputToken, studentFound.token, (err, result) => {
              if (err) {
                console.log(err);
                res.json({ status: false });
              } else {
                res.json({
                  status: result,
                  message: result ? "Succesful login" : "Wrong token!",
                });
              }
            });
          }
        } else {
          // token = null
          res.json({
            status: false,
            message: `Token not found for ${inputNIM}`,
          });
        }
      }
    }
  });
});

router.route("/async").post(async (req, res) => {
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
