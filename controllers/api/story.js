const router = require('express').Router();
const Story = require('../../models/story')

router.get('/story', async (req, res) => {
  res.render('story');
});


module.exports = router;