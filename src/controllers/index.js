const customer = require('./customer');

const controllerMapper = (collectionID, method) => {
	const controllers = {
		customer: {
			LIST: customer.LIST,
			UPDATE: customer.UPDATE,
			CREATE: customer.CREATE,
			DELETE: customer.DELETE,
			USE_CELEBRATE: customer.USE_CELEBRATE,
		},
	};

	const controller = controllers[collectionID][method];
	if (!controller) {
		throw new Error(`Theres was an error matching a controller for ${collectionID} on ${method}.`);
	}
	return controller;
};

module.exports = controllerMapper;
