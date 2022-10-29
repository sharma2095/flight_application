const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/register", async (req, res) => {
  const body = req.body;
  try {
    let response = await db.User.create({
      userName: body.userName,
      email: body.email,
      gender: body.gender,
      dob: body.dob,
    });
    console.log(response);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

router.post("/login", async (req, res) => {
  const body = req.body;
  try {
    let response = await db.User.findOne({
      where: {
        userName: body.userName,
        email: body.email,
      },
    });
    console.log(response);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
