const router = require('express').Router();
const Story = require('../../models/story')

router.get('/death', async (req, res) => {
  try {
    const deathData = await Story.findOne({ where: { keyword: "death" }})   // find the story section with the keyword "death."
    // change query to not hardcode primary key
    console.log(deathData)
    const death = deathData.get({ plain: true})
    res.render('death', death)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;