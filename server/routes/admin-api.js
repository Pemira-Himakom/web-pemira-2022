"use strict";

import express from "express";
import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";
import Student from "../models/Student.js";
import Candidate from "../models/Candidate.js";

const router = express.Router();

// authenticate
router.route("/authenticate").post((req, res) => {
  const { inputUsername, inputPassword } = req.body;

  Admin.findOne({ username: inputUsername }, (err, adminFound) => {
    if (err) {
      console.log(err);
      res.json({ status: false });
    } else {
      if (adminFound === null) {
        {
          res.json({ status: false });
        }
      } else {
        bcrypt.compare(inputPassword, adminFound.password, (err, result) => {
          if (err) {
            console.log(err);
            res.json({ status: false });
          } else {
            res.json({ status: result, adminID: adminFound._id });
          }
        });
      }
    }
  });
});

// assign token
router.route("/:adminID/assign").post((req, res) => {
  // add token to corresponding user
  const { nim, token } = req.body;
  const { adminID } = req.params;

  Admin.exists({ _id: adminID }, (err) => {
    if (err) {
      console.log(err);
      res.json({ status: false, message: "Admin not found" });
    } else {
      // hash token
      bcrypt.hash(token, Number(process.env.SALT), (err, hash) => {
        if (err) {
          console.log(err);
          res.json({ status: false });
        } else {
          // find student by nim then update token
          Student.findOneAndUpdate(
            { NIM: nim },
            { token: hash },
            (err, studentFound) => {
              if (err) {
                console.log(err);
                res.json({ status: false });
              } else {
                if (studentFound === null) {
                  res.json({
                    status: false,
                    message: "Student not found in the database!",
                  });
                } else {
                  res.json({ status: true });
                }
              }
            }
          );
        }
      });
    }
  });
});

// student list
router.route("/:adminID/student_list").get((req, res) => {
  const { adminID } = req.params;
  const query = req.query;
  Admin.exists({ _id: adminID }, (err) => {
    if (err) {
      console.log(err);
      res.json({ status: false, message: "Admin not found" });
    } else {
      Student.find(query, (err, list) => {
        if (err) {
          console.log(err);
          res.json({ status: false });
        } else {
          // filter list to only display {NIM, name, voted}
          if (list === null) {
            res.json({ status: false });
          } else {
            const filteredList = list.reduce((result, student) => {
              const { nim, name, voted } = student;
              result.push({ nim, name, voted });
              return result;
            }, []);
            res.json({ status: true, studentList: filteredList });
          }
        }
      });
    }
  });
});

// recap vote
router.route("/:adminID/recap").get((req, res) => {
  const { adminID } = req.params.adminID;
  const { start, end } = req.query;
  Admin.exists({ _id: adminID }, (err) => {
    if (err) {
      console.log(err);
      res.json({ status: false, message: "Admin not found" });
    } else {
      Candidate.aggregate([
        {
          $match: { date: { $gte: new Date(start), $lte: new Date(end) } },
        },
        {
          $group: {
            _id: "$candidateNumber",
            totalVote: { $sum: "$voteCounter" },
          },
        },
        {
          $project: {
            candidateNumber: "$_id",
            totalVote: 1,
            _id: 0,
          },
        },
        {
          $sort: { candidateNumber: 1 },
        },
      ]).exec((err, candidates) => {
        if (err) {
          console.log(err);
          res.json({ status: false });
        } else [res.json({ status: true, candidates: candidates })];
      });
    }
  });
});

export default router;