const express = require('express');
const permissionValidator = require('../../middlewares/permissionValidator');
const requestValidator = require('../../middlewares/requestValidator');
const controllers = require('../../controllers');
const routeConfigValidator = require('./routeConfigValidator');

const router = express.Router();

const routeHandler = (collectionConfig) => {
	const {
		resourceID,
		routes,
	} = collectionConfig;

	routeConfigValidator({
		resourceID,
		collectionConfig,
		controllers,
	});

	const routeHelper = (_method, options) => {
		const {
			path, permissions, controllerName, requestValidations,
		} = options;
		router[_method.toLowerCase()](
			path,
			permissionValidator(permissions),
			requestValidator(requestValidations),
			controllers[resourceID][controllerName],
		);
	};

	routes.forEach((routeConfig) => {
		const {
			controllerName,
			path,
			method,
			permissions = [],
			requestValidations = {},
		} = routeConfig;

		try {
			routeHelper(
				method,
				{
					path,
					permissions,
					controllerName,
					requestValidations,
				},
			);
		} catch (error) {
			throw new Error(error);
		}
	});

	return router;
};

module.exports = routeHandler;
