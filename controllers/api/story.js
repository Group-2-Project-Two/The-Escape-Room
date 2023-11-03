const router = require('express').Router();
const Story = require('../../models/story')

router.get('/story', async (req, res) => {
  try {
    const storyData = await Story.findOne({ where: { keyword: "beginning" }})
    console.log("story data", storyData)
    const storySection = storyData.get({ plain: true })
    res.render('story', storySection)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/story/continue', async (req, res) => {
  try {
    const storyData = await Story.findOne({ where: { keyword: req.params.choice_A }})
    console.log("story data", storyData)
    const storySection = storyData.get({ plain: true })
    res.render('story', storySection)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;