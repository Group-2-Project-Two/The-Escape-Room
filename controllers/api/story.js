const router = require('express').Router();
const Story = require('../../models/story')

let nextStoryLocation
let nextStory

router.get('/story', async (req, res) => {
  try {
    const storyData = await Story.findOne({ where: { keyword: "beginning1" }})
    const storySection = storyData.get({ plain: true })
    res.render('story', storySection)
  } catch (err) {
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

router.post('/story/continue', async (req, res) => {
    const choiceType = req.body.data.id
    const choiceText = req.body.data.text
    console.log("hit route")
    try {
    console.log("hit first try")
      if (choiceType == "choiceA") { 
          const storyData = await Story.findOne({ 
            where: {
                choice_A: choiceText
            }
          })
          console.log("hit choice A")
          nextStoryLocation = storyData.dataValues.next_A
          nextStory = await Story.findOne({
            where: {
              id: nextStoryLocation
            }
          })
          const nextStorySection = nextStory.get({ plain: true })
          console.log(nextStorySection)
          return res.json(nextStorySection)
      } else { 
          const storyData = await Story.findOne({ 
            where: {
                choice_B: choiceText
            }
          })
          console.log("hit choice B")
          nextStoryLocation = storyData.dataValues.next_B
          nextStory = await Story.findOne({
            where: {
              id: nextStoryLocation
            }
          })
          const nextStorySection = nextStory.get({ plain: true })
          console.log(nextStorySection)
          return res.json(nextStorySection)
    }}
    catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
exports.nextStoryLocation = nextStoryLocation