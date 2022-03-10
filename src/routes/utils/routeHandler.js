const express = require('express');
const permissionValidator = require('../../middlewares/permissionValidator');
const requestValidator = require('../../middlewares/requestValidator');
const controller = require('../../controllers');

const router = express.Router();

const routeHandler = (collectionConfig) => {
	const {
		resourceID,
		routes,
	} = collectionConfig;

	const routeHelper = {
		USE: (_path, _permissions, _controllerName, _validations) => {
			router.use(
				_path,
				permissionValidator(_permissions),
				requestValidator(_validations),
				controller(resourceID, _controllerName),
			);
		},
		GET: (_path, _permissions, _controllerName, _validations) => {
			router.get(
				_path,
				permissionValidator(_permissions),
				requestValidator(_validations),
				controller(resourceID, _controllerName),
			);
		},
		POST: (_path, _permissions, _controllerName, _validations) => {
			router.post(
				_path,
				permissionValidator(_permissions),
				requestValidator(_validations),
				controller(resourceID, _controllerName),
			);
		},
		PUT: (_path, _permissions, _controllerName, _validations) => {
			router.put(
				_path,
				permissionValidator(_permissions),
				requestValidator(_validations),
				controller(resourceID, _controllerName),
			);
		},
		DELETE: (_path, _permissions, _controllerName, _validations) => {
			router.delete(
				_path,
				permissionValidator(_permissions),
				requestValidator(_validations),
				controller(resourceID, _controllerName),
			);
		},
	};

	routes.forEach((routeConfig) => {
		const {
			name,
			path,
			method,
			permissions = [],
			requestValidations = {},
		} = routeConfig;

		try {
			routeHelper[method](
				path,
				permissions,
				name,
				requestValidations,
			);
		} catch (error) {
			throw new Error(error);
		}
	});

	return router;
};

module.exports = routeHandler;
