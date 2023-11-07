const router = require("express").Router();
const deathRoute = require("./death.js");
const storyRoute = require("./story.js");
const winnerRoute = require("./winner.js");

router.use("/death", deathRoute);
router.use("/story", storyRoute);
router.use("/story/continue", storyRoute);
router.use("/winner", winnerRoute);


module.exports = router;
