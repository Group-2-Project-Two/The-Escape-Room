const router = require('express').Router();

  router.get('/story', async (req, res) => {
    res.render('story');
  });

module.exports = router;