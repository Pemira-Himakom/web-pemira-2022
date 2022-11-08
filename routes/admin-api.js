"use strict";

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// db
import Admin from "../models/Admin.js";
import Student from "../models/Student.js";
import Candidate from "../models/Candidate.js";

// middleware
import authenticateToken from "../middleware/authenticateToken.js";

const router = express.Router();

// authenticate
router.route("/authenticate").post(async (req, res) => {
  try {
    const { inputUsername, inputPassword } = req.body;

    if (!(inputUsername && inputPassword))
      throw new Error(
        "Incomplete request input! Requires both username and password!"
      );

    const foundAdmin = await Admin.findOne({ username: inputUsername });
    if (!foundAdmin) throw new Error("Admin not found!");

    const result = await bcrypt.compare(inputPassword, foundAdmin.password);
    if (!result) throw new Error("Incorrect password!");

    // create jwt token
    const accessToken = jwt.sign(
      { _id: foundAdmin._id, admin: true },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res.cookie("accessToken", accessToken, { httpOnly: true, maxAge: 900000 });
    res.json({
      status: result,
      message: "Successfuly logged in!",
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

router
  .route("/refresh")
  .post(parseCookie, authenticateToken, async (req, res) => {
    try {
      const { _id, admin } = req.user;
      const newToken = jwt.sign(
        { _id, admin },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "10m",
        }
      );
      res.cookie("accessToken", newToken, { httpOnly: true, maxAge: 600000 });
      res.json({
        status: true,
        message: "Successfully refreshed session",
      });
    } catch (err) {
      res.json({ status: false, message: err.message });
    }
  });

// assign token
router
  .route("/assign")
  .post(parseCookie, authenticateToken, async (req, res) => {
    try {
      const { _id } = req.user;
      const { nim, token } = req.body;

      // admin verification
      const admin = await Admin.exists({ _id });
      if (!admin) throw new Error("Invalid admin!");

      // hash
      const hashedToken = await bcrypt.hash(token, Number(process.env.SALT));

      // update student attribute
      const student = await Student.findOneAndUpdate(
        { NIM: nim },
        { token: hashedToken }
      );
      if (!student) throw new Error("Incorrect NIM!");

      res.json({
        status: true,
        message: `Successfully assigned token to student ${nim}`,
      });
    } catch (error) {
      res.json({ status: false, message: error.message });
    }
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