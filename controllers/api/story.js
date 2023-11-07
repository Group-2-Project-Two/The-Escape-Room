const router = require('express').Router();
const Story = require('../../models/story')

let nextStoryLocation

router.get('/story', async (req, res) => {
  try {
    const storyData = await Story.findOne({ where: { keyword: "beginning1" }})    //looks for a story section with a specific keyword
    const storySection = storyData.get({ plain: true })
    res.render('story', storySection)       //renders "story" and passes the storySection data
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/story/continue', async (req, res) => {
    const choiceType = req.body.data.id
    const choiceText = req.body.data.text             //extract the choice type and choice text from the request
    try {
      if (choiceType == "choiceA") { 
          const storyData = await Story.findOne({ 
            where: {
                choice_A: choiceText
            }
          })
          nextStoryLocation = storyData.dataValues.next_A
          //use obj destruct for these
          res.json(nextStoryLocation)                               //determine which choice the user made (either "choiceA" or "choiceB"). Story.findOne() method to find the next story section.
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
    const storyData = await Story.findByPk(nextStoryLocation)   //retrieve the corresponding story section from the database 
    const storySection = storyData.get({ plain: true })
    res.render('story', storySection)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;

// add IF/ELSE to be able to move to DEATH or WINNER depending on where in the story we are. Don't want this route to continue with those options.
