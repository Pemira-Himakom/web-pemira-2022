"use strict";

import express from "express";
import Student from "../models/Student.js";
import bcrypt from "bcrypt";

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
                res.json({ status: result });
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

export default router;