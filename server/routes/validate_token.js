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
});

export default router;
