const customer = require('./customer');

const controllers = {
	customer: {
		LIST: customer.LIST,
		UPDATE: customer.UPDATE,
		CREATE: customer.CREATE,
		USE_CELEBRATE: customer.USE_CELEBRATE,
	},
};

module.exports = controllers;
