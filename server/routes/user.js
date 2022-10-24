"use strict";

import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

router.route("/").post((req, res) => {
  const { inputNIM } = req.body;
  Student.findOne({ NIM: inputNIM }, (err, result) => {
    if (err) {
      console.log(err);
      res.json({ status: false });
    } else {
      if (result === null) {
        res.json({ status: false });
      } else {
        const { NIM, name, voted } = result;
        res.json({ status: true, studentData: { NIM, name, voted } });
      }
    }
  });
});

export default router;
