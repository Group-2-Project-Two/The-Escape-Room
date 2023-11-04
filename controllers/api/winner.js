const router = require('express').Router();
const Story = require('../../models/story')

router.get('/winner', async (req, res) => {
    try {
      const winnerData = await Story.findOne({
        where: {
        keyword: "winner"
        }
        })
      // change query to not hardcode primary key
      // Figure out rendering images through routes not hard code
      console.log(winnerData)
      const winner = winnerData.get({ plain: true})
      res.render('winner', winner)
    } catch (err) {
      res.status(500).json(err)
    }
  })

module.exports = router;