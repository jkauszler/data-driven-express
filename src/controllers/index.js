const customer = require('./customer');

const controllers = {
	customer: {
		LIST: customer.LIST,
		UPDATE: customer.UPDATE,
		CREATE: customer.CREATE,
		DELETE: customer.DELETE,
		USE_CELEBRATE: customer.USE_CELEBRATE,
	},
};

const controller = (collectionID, method) => {
	const controllerHandler = controllers[collectionID][method];
	if (!controllerHandler) {
		throw new Error(`Theres was an error matching a controller for ${collectionID} on ${method}.`);
	}
	return controllerHandler;
};

module.exports = controller;
