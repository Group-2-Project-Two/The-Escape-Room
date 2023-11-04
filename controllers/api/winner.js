const router = require('express').Router();
const Story = require('../../models/story')
/*const test = [
    {
      name: 'this is a test',
    },
  ];
  router.get('/winner', async (req, res) => {
    res.render('winner');
  });*/

  router.get('/winner', async (req, res) => {
    try {
      const winnerData = await Story.findOne({ where: { keyword: "winner" }})
      // change query to not hardcode primary key
      // update winner in seeds from tower to winner
      console.log(winnerData)
      const winner = winnerData.get({ plain: true})
      res.render('winner', winner)
    } catch (err) {
      res.status(500).json(err)
    }
  })

module.exports = router;