const router = require('express').Router();

const apiRoutes = require('./api/');
const testRoute = require('./api/test-route.js');

router.use('/', testRoute);

module.exports = router;