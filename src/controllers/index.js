const customer = require('./customer');

const controllers = {
	customer: {
		LIST: customer.LIST,
		UPDATE: customer.UPDATE,
		CREATE: customer.CREATE,
		DELETE: customer.DELETE,
		USE_CELEBRATE: customer.USE_CELEBRATE,
		NO_PERMISSIONS: customer.NO_PERMISSIONS,
	},
};

const controller = (resourceID, controllerName) => {
	const controllerHandler = controllers[resourceID][controllerName];
	if (!controllerHandler) {
		throw new Error(`Theres was an error matching a controller for ${resourceID} on ${controllerName}.`);
	}
	return controllerHandler;
};

module.exports = controller;
