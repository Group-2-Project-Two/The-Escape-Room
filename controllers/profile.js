const router = require("express").Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  res.render("profile");
});

router.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      userName: req.body.userName,
      password: req.body.password,
    });
    console.log(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/return", async (req, res) => {
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

    // Handle the successful login here
  } catch (err) {
    res.status(400).json({ message: "This did not work" });
  }
});

module.exports = router;
