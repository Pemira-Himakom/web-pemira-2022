"use strict";

import express from "express";
import Student from "../models/Student.js";
import bcrypt from 'bcrypt';
// const salt = bcrypt.genSalt();
const salt = 10;

const router = express.Router();

router.route("/").post((req,res) =>{
  const {inputNIM, inputToken} = req.body;  

  Student.findOne({NIM: inputNIM}, (err, studentFound) => {
    if (err) {
      console.log(err);
    } else {
      bcrypt.compare(inputToken, studentFound.token, (err, result) => {
        if(err) {
          console.log(err);
        }else {
          res.json({status: result})
        }
      })
    }
  })
})

export default router;
