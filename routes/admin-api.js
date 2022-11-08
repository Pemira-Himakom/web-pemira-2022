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
      { _id: foundAdmin._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("accessToken", accessToken); // add expire time
    res.json({
      status: result,
      message: "Successfuly logged in!",
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

// assign token
router.route("/assign").post(authenticateToken, async (req, res) => {
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

  try {
    const { adminID } = req.params;
    const query = req.query;
    const adminResult = Admin.exists({ _id: adminID });

    if (!adminResult){
      throw new Error({status: false, message: "Admin not found"})
    } 

    const foundStudentData = Student.find(query)
    if (foundStudentData === null) {throw new Error ({status: false, message: "Student data not found"})}
    const filteredList = list.reduce((result, student) => {
    const { nim, name, voted } = student;
        result.push({ nim, name, voted });
        return result;
      }, []);
      res.json({ status: true, studentList: filteredList });
  }
  catch (error){
    res.json
  }
}
);

// recap vote
router.route("/:adminID/recap").get((req, res) => {
  try {
    const { adminID } = req.params.adminID;
    const { start, end } = req.query;
    const isAdminExist = Admin.exists({ _id: adminID });

    if(!isAdminExist) { throw new Error({status: false, message: "Error! Admin not found"}) }

    const aggregatedData = Candidate.aggregate([
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
    ]).exec((candidates) => {
      [res.json({ status: true, candidates: candidates })];
    });
  } catch (error) {
    res.json({status: false, message: error.message});
  }
}
);

export default router;
