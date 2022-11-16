const User = require("../models/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    let user = await User.findOne({ email: email }).lean().exec();
    if (user) {
      return res.status(400).json({
        status: "failed",
        message: "User already exist",
      });
    }

    user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email }).lean().exec();
    if (!user) {
      return res
        .status(400)
        .json({ status: "failed", message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: "failed",
        message: "Please provide a correct Email and Password",
      });
    }

    res.status(200).send(user);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
