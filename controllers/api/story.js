const router = require('express').Router();
const Story = require('../../models/story')

let nextStoryLocation

router.get('/story', async (req, res) => {
  try {
    const storyData = await Story.findOne({ where: { keyword: "beginning1" }})
    const storySection = storyData.get({ plain: true })
    res.render('story', storySection)
  } catch (err) {
    res.status(500).json(err)
  }
});

// function youDied() {
//   router.get('/death/:id', async (req, res) => {
//     try {
//       const deathData = await Story.findOne({ where: { id: nextStoryLocation }})
//     console.log(deathData)
//     const death = deathData.get({ plain: true})
//     res.render('death', death)
//     } catch (err) {
//       res.status(500).json(err)
//     }
//   })
// }

// function youWin() {
//   router.get('winner/:id', async (req, res) => {
//     try {
//       const winnerData = await Story.findOne({ where: { id: nextStoryLocation }})
//     console.log(winnerData)
//     const win = winnerData.get({ plain: true})
//     res.render('winner', win)
//     } catch (err) {
//       res.status(500).json(err)
//     }
//   })
// }

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
          const nextStory = await Story.findOne({
            where: {
              id: nextStoryLocation
            }
          })
          console.log(storyData)
          if (nextStory.dataValues.type == 'death') {
            console.log("hit death")
            res.render('death')
          } else if (nextStory.dataValues.type == 'win') {
            console.log("hit win")
            res.render('winner')
          } else {
            console.log("hit next story location")
            res.json(nextStoryLocation)
          }
      } else { 
          const storyData = await Story.findOne({ 
            where: {
                choice_B: choiceText
            }
          })
          console.log("hit choice B")
          nextStoryLocation = storyData.dataValues.next_B
          const nextStory = await Story.findOne({
            where: {
              id: nextStoryLocation
            }
          })
          console.log(storyData)
          if (nextStory.dataValues.type == 'death') {
            console.log("hit death")
            res.render('death')
          } else if (nextStory.dataValues.type == 'win') {
            console.log("hit win")
            res.render('winner')
          } else {
            console.log("hit next story location")
            res.json(nextStoryLocation)
          }
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
exports.nextStoryLocation = nextStoryLocation