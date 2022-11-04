"use strict";

import express from "express";
import jwt from "jsonwebtoken";

import Candidate from "../models/Candidate.js";
import Student from "../models/Student.js";

const router = express.Router();

router.route("/jwt").post(authenticateToken, async (req, res) => {
  try {
    const { votedCandidate } = req.body;
    const { nim } = req.user;
    const date = new Date(); // get current date
    const currentDate = new Date(
      `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${`0${date.getDate()}`.slice(-2)}`
    );

    const foundStudent = await Student.findOne({ NIM: nim });
    if (!foundStudent) throw new Error("Student not found!");
    if (foundStudent.voted) throw new Error("Student already voted!");

    // increment voteCounter of voted candidate  + current date
    const foundCandidate = await Candidate.findOneAndUpdate(
      { date: currentDate, candidateNumber: votedCandidate },
      { $inc: { voteCounter: 1 } }
    );

    if (!foundCandidate) {
      throw new Error("Candidate not found in current time span!");
    }

    // set student vote = true
    await Student.findByIdAndUpdate(foundStudent._id, { voted: true });

    res.json({
      status: true,
      message: `Vote successful for candidate number ${votedCandidate}`,
      foundCandidate,
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

// middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export default router;

// delete later (add new candidate)

// router.route("/").get((req, res) => {
//   const date = new Date();
//   const tanggal = `${date.getFullYear()}-${
//     date.getMonth() + 1
//   }-${`0${date.getDate()}`.slice(-2)}`;
//   console.log(tanggal);
//   const newCandidate = new Candidate({
//     name: "name1",
//     candidateNumber: 1,
//     voteCounter: 0,
//     date: new Date(tanggal),
//   });
//   newCandidate.save();
//   res.json(newCandidate);
//   Candidate.find((err, candidateList) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(candidateList);
//     }
//   });
// });
