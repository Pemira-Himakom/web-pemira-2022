"use strict";

import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Student.find((err, studentList) => {
    if (err) {
      console.log(err);
    } else {
      res.json(studentList);
    }
  });
}).post((req,res) =>{
  const token = req.body.token;
  // hash token using bcrypt strategy compare to database.
  // if (hashedToken exists && not voted yet){ status: true reroute to voting page }
  // else { status: false }
})

export default router;
