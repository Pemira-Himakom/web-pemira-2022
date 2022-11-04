"use strict";

import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

router.route("/").post( async (req, res) => {
  try {
    const { inputNIM } = req.body;
    const studentFound = await Student.findOne({ NIM: inputNIM });
    
    if(!studentFound){
      throw new Error("Student not found!, try another NIM")
    }
    
    const {nim, name, voted} = studentFound;
    res.json({
      status: true,
      message: "201 Success",
      studentData: {nim, name, voted}
    });
  } catch (err){
    res.json({ status: false, message: err.message });
  }
});

export default router;
