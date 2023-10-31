const router = require('express').Router();

const test = [
    {
      name: 'this is a test',
    },
  ];
  router.get('/death', async (req, res) => {
    res.render('death');
  });

module.exports = router;