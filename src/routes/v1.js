const express = require('express');
const customerConfig = require('./route_configs/customer');
const routeHandler = require('./utils/routeHandler');

const router = express.Router();

router.use('/customer', routeHandler(customerConfig));

module.exports = router;
