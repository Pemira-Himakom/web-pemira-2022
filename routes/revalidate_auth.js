"use strict";

import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.route("/revalidate_auth").post(async (req, res) => {
  try {
    const { refreshToken } = req.body;
    jwt.verify(refreshToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.json({ status: false, message: err.message });
      return res.json({ status: true, role: "admin" });
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

export default router;
