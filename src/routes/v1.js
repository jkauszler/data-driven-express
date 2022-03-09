const express = require('express');
const customerConfig = require('./configs/customer');
const routeMapper = require('./utils/routeMapper');

const router = express.Router();

router.use('/customer', routeMapper(customerConfig));

module.exports = router;
