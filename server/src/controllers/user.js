const User = require("../models/user");

const THIRTY_MINUTES = 60 * 30 * 1000

const login = async (req, res, next) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateToken();
    res.cookie("myToken", token, {
      expires: new Date(Date.now() + THIRTY_MINUTES),
      httpOnly: true,
    });
    res.send({ user });
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
};

const logout = async (req, res, next) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.clearCookie("myToken");
    res.send();
  } catch (err) {
    res.status(500).send();
  }
};

const register = async (req, res, next) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateToken();
    res.cookie("myToken", token, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
    });
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { login, logout, register };
