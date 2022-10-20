"use strict"

import express from "express";
import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.route("/").get((req, res) => {
    // bcrypt.hash("dummypassword", 10, (err, hash) => {
    //     if(err){
    //         console.log(err);
    //         res.json("failed");
    //     } else {
    //         const newAdmin = new Admin({
    //             username: "dummy1",
    //             password: hash
    //         });
    //         newAdmin.save();
    //     }
    // })
    // res.json("successfully added data!")
}).post((req, res) => {
    const { inputUsername, inputPassword } = req.body;

    Admin.findOne({username: inputUsername}, (err, adminFound) => {
        if(err){
            console.log(err);
            res.json({status: false});
        } else {
            bcrypt.compare(inputPassword, adminFound.password, (err, result) => {
                if(err){
                    console.log(err);
                    res.json({status: false});
                } else {
                    res.json({status: result});
                }
            })
        }
    })
})

export default router