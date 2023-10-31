const router = require('express').Router();

const apiRoutes = require('./api/');
const profileRoute = require('./profile.js');

router.use('/', profileRoute);
router.use('/api', apiRoutes);

module.exports = router;