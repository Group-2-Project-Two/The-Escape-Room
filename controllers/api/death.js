const router = require('express').Router();
const Story = require('../../models/story')
const nextStoryLocation = require('./story')

router.get('/death', async (req, res) => {
  try {
    const deathData = await Story.findOne({ where: { id: nextStoryLocation }})
    console.log(deathData)
    const death = deathData.get({ plain: true})
    res.render('death', death)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;