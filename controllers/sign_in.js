const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// This line of code is using the res object to render "profile."
router.get("/", async (req, res) => {
  res.render("profile");
});

router.get("/", async (req, res) => {
  try {
    const getAllUsers = await User.findAll({
      userName: req.body.userName,       // Use req.query for GET request parameters
      password: req.body.passowrd,
    });
    console.log(getAllUsers);     // Send the retrieved users as a JSON response
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create({     //attempts to create a new user 
      userName: req.body.userName,
      password: req.body.password,
    });
    res.redirect("/story");       //If user creation is successful, it responds with a redirection to the "/story" route
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {      // This line of code is using the res object to render "login"
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;             // tries to find a existing username, if wrong prompt "Incorrect username or password, please try again"

    const user = await User.findOne({
      where: { userName },
    });

    if (!user) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const isPasswordValid = await userData.checkPassword(password);

    if (!isPasswordValid) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    console.log("user found");
  } catch (err) {
    res.status(400).json({ message: "This did not work" });
  }
});

module.exports = router;
