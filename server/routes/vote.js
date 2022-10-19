"use strict";

import express from "express";
import Candidate from "../models/Candidate.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Candidate.find((err, candidateList) => {
    if (err) {
      console.log(err);
    } else {
      res.json(candidateList);
    }
  });
});

export default router;
