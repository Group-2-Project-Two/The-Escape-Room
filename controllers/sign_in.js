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

    // req.session.save(() => {
    //   req.session.userId = newUser.id;
    //   req.session.username = newUser.username;
    //   req.session.loggedIn = true;

    //   res.json(newUser);
    // });

    console.log(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { userName: req.body.userName },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }
  } catch (err) {
    res.status(400).json({ message: "This did not work" });
  }
});

module.exports = router;
