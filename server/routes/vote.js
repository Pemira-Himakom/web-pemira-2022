"use strict";

import express from "express";

import Candidate from "../models/Candidate.js";
import Student from "../models/Student.js";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    // const date = new Date();

    // const tanggal = `${date.getFullYear()}-${
    //   date.getMonth() + 1
    // }-${date.getDate()}`;

    // const newCandidate = new Candidate({
    //   name: "name3",
    //   candidateNumber: 3,
    //   voteCounter: 0,
    //   date: new Date(tanggal),
    // });

    // newCandidate.save();

    Candidate.find((err, candidateList) => {
      if (err) {
        console.log(err);
      } else {
        res.json(candidateList);
      }
    });
  })
  .post((req, res) => {
    const { votedCandidate, nim } = req.body;
    const date = new Date(); // get current date
    const currentDate = new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );

    // increment voteCounter of voted candidate  + current date
    Candidate.findOneAndUpdate(
      { date: currentDate, candidateNumber: votedCandidate },
      { $inc: { voteCounter: 1 } }, // increment by 1
      (err) => {
        if (err) {
          console.log(err);
          res.json({ status: false });
        } else {
          // find student w/ coresponding nim and update => voted: true
          Student.findOneAndUpdate({ NIM: nim }, { voted: true }, (err) => {
            if (err) {
              console.log(err);
              res.json({ status: false });
            } else {
              res.json({ status: true });
            }
          });
        }
      }
    );
  });

export default router;
