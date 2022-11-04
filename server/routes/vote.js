"use strict";

import express from "express";

import Candidate from "../models/Candidate.js";
import Student from "../models/Student.js";

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { votedCandidate, nim } = req.body;
    const date = new Date(); // get current date
    const currentDate = new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );

    // increment voteCounter of voted candidate  + current date
    const foundCandidate = await Candidate.findOneAndUpdate(
      { date: currentDate, candidateNumber: votedCandidate },
      { $inc: { voteCounter: 1 } }
    );

    if (!foundCandidate) {
      throw new Error("Candidate not found!");
    }

    const foundStudent = await Student.findOneAndUpdate(
      { NIM: nim },
      { voted: true }
    );

    if (!foundStudent) {
      throw new Error("Student not found! Please check your NIM input.");
    }

    res.json(foundStudent);
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

export default router;


// delete later (add new candidate)

// router.route("/").get((req, res) => {
  // const date = new Date();
  // const tanggal = `${date.getFullYear()}-${
  //   date.getMonth() + 1
  // }-${date.getDate()}`;
  // const newCandidate = new Candidate({
  //   name: "name1",
  //   candidateNumber: 1,
  //   voteCounter: 0,
  //   date: new Date(tanggal),
  // });
  // newCandidate.save();
  // res.json(newCandidate);
  // Candidate.find((err, candidateList) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(candidateList);
  //   }
  // });
// })
