const customer = require('./customer');

const controllerMapper = (collectionID, method) => {
	const controllers = {
		customer: {
			GET: customer.GET,
			PUT: customer.PUT,
			POST: customer.POST,
			DELETE: customer.DELETE,
		},
	};

	const controller = controllers[collectionID][method];
	if (!controller) {
		throw new Error(`Theres was an error matching a controller for ${collectionID} on ${method}.`);
	}
	return controller;
};

module.exports = controllerMapper;
