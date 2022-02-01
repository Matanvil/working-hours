const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const User = require("../models/user");
const { login, logout, register } = require("../controllers/user");

//signup
router.post("/api/users", register)

//login
router.post("/api/users/login", login);

//logout
router.post("/api/users/logout", auth, logout);

//logout from all sessions
router.post("/api/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send("logout of all users");
  } catch (err) {
    res.status(500).send();
  }
});

// view my profile
router.get("/api/users/me", auth, async (req, res) => {
  res.send(req.user);
});

//update user profile
router.patch("/api/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdated = ["name", "email", "password", "age"];
  const isValid = updates.every((update) => allowedUpdated.includes(update));

  if (!isValid) {
    res.status(400).send({ error: "Invalid update" });
  }
  try {
    const user = req.user;
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

//delete user profile
router.delete("/api/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
