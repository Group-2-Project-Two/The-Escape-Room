const router = require(`express`).Router();

const test = [
  {
    name: `this is a test`,
  },
];
router.get(`/`, async (req, res) => {
  res.render(`test-routes`);
});

module.exports = router;











