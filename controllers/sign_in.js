const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  res.render("profile");
});

router.get("/", async (req, res) => {
  try {
    const getAllUsers = await User.findAll({
      userName: req.body.userName,
      password: req.body.passowrd,
    });
    console.log(getAllUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      userName: req.body.userName,
      password: req.body.password,
    });
    res.redirect("/story");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const findUser = await User.findOne({
      where: { userName: req.body.userName },
    });

    if (!findUser) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const isPasswordValid = await findUser.checkPassword(req.body.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      res.status(400).json({ message: "You hit the password route" });
      return;
    }
    console.log(findUser);
    res.redirect("/story");
  } catch (err) {
    res.status(400).json({ message: "This did not work" });
  }
});

module.exports = router;
