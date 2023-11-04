const router = require('express').Router();
const Story = require('../../models/story')

let nextStoryLocation

router.get('/story', async (req, res) => {
  try {
    const storyData = await Story.findOne({ where: { keyword: "beginning" }})
    const storySection = storyData.get({ plain: true })
    res.render('story', storySection)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/story/continue', async (req, res) => {
    const choiceType = req.body.data.id
    const choiceText = req.body.data.text
    try {
      if (choiceType == "choiceA") { 
          const storyData = await Story.findOne({ 
            where: {
                choice_A: choiceText
            }
          })
          nextStoryLocation = storyData.dataValues.next_A
          //use obj destruct for these
          res.json(nextStoryLocation)
      } else { 
          const storyData = await Story.findOne({ 
            where: {
                choice_B: choiceText
            }
          })
          nextStoryLocation = storyData.dataValues.next_B
          res.json(nextStoryLocation)
    }}
    catch (err) {
    res.status(500).json(err)
  }
});

router.get('/story/continue', async (req, res) => {
  try {
    const storyData = await Story.findByPk(nextStoryLocation)
    const storySection = storyData.get({ plain: true })
    res.render('story', storySection)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;