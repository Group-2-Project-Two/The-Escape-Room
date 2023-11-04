// const router = require('express').Router();
// const bcrypt = require('bcrypt');
// const User = require('../../models/user');


// // router.post('/', async (req, res) => {
// //   try {
// //     const newUser = req.body;
// //     newUser.password = await bcrypt.hash(req.body.password, 10);
   
// //     const userData = await User.create(newUser);
// //     res.status(200).json(userData);
// //   } catch (err) {
// //     res.status(400).json(err);
// //   }
// // });

// router.post('/', async (req, res) => {
//   console.log(req.body)
//   try {
//     const newUser = await User.create({
//       userName: req.body.username,
//       password: req.body.password,
//     });

//     console.log(newUser)

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;