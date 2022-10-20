"use strict";

import express from "express";
import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";
import Student from "../models/Student.js";

const router = express.Router();

// authenticate
router.route("/authenticate").post((req, res) => {
  const { inputUsername, inputPassword } = req.body;

  Admin.findOne({ username: inputUsername }, (err, adminFound) => {
    if (err) {
      console.log(err);
      res.json({ status: false });
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
  });
});

// assign token
router.route("/assign").post((req, res) => {
  // add token to corresponding user
  const { nim, token, adminID } = req.body;

  Admin.exists({ _id: adminID }, (err) => {
    if (err) {
      console.log(err);
      res.json({ status: false });
    } else {
      // hash token
      bcrypt.hash(token, Number(process.env.SALT), (err, hash) => {
        if (err) {
          console.log(err);
          res.json({ status: false });
        } else {
          // find student by nim then update token
          Student.findOneAndUpdate({ NIM: nim }, { token: hash }, (err) => {
            if (err) {
              console.log(err);
              res.json({ status: false });
            } else {
              res.json({ status: true });
            }
          });
        }
      });
    }
  });
});

export default router;
