const router = require('express').Router();
const Story = require('../../models/story')
const nextStoryLocation = require('./story')

router.get('/death', async (req, res) => {
  console.log("next? ", nextStoryLocation)
  try {
    // const deathData = await Story.findOne({ where: { id: nextStoryLocation }})
    const deathData = await Story.findOne({ where: { id: 3 }})
    console.log(deathData)
    const death = deathData.get({ plain: true})
    res.render('death', death)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;