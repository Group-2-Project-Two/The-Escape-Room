const router = require('express').Router();
const Story = require('../../models/story')

// const test = [
//     {
//       name: 'this is a test',
//     },
//   ];
//   router.get('/death', async (req, res) => {
//     res.render('death');
//   });

router.get('/death', async (req, res) => {
  try {
    const deathData = await Story.findByPk(4)
    // change query to not hardcode primary key
    console.log(deathData)
    const death = deathData.get({ plain: true})
    res.render('death', death)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;