const router = require('express').Router();

const test = [
    {
      name: 'this is a test',
    },
  ];
  router.get('/story', async (req, res) => {
    res.render('story');
  });

module.exports = router;