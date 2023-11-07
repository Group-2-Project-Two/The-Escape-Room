const router = require("express").Router();

const apiRoutes = require("./api/");
const signIn = require("./sign_in.js");

router.use("/", signIn);
router.use("/api", apiRoutes);

module.exports = router;
