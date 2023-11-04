const router = require('express').Router();


  router.get('/winner', async (req, res) => {
    res.render('winner');
  });

module.exports = router;