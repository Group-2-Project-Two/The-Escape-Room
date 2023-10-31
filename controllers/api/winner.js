const router = require('express').Router();

const test = [
    {
      name: 'this is a test',
    },
  ];
  router.get('/winner', async (req, res) => {
    res.render('winner');
  });

module.exports = router;