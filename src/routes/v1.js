const express = require('express');
const customerConfig = require('./route_configs/customer');
const routeMapper = require('./utils/routeMapper');

const router = express.Router();

router.use('/customer', routeMapper(customerConfig));

module.exports = router;
