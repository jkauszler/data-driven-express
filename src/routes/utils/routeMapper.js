const express = require('express');
const requestValidator = require('../../middlewares/requestValidator');
const controller = require('../../controllers');

const router = express.Router();

const routeMapper = (collectionConfig) => {
	const {
		collectionID,
		routes,
	} = collectionConfig;

	const routeHelper = {
		USE: (_path, _controllerName) => {
			router.use(
				// TODO: add a optional path
				controller(collectionID, _controllerName),
			);
		},
		GET: (_path, _controllerName, _validations) => {
			router.get(
				_path,
				requestValidator(_validations),
				controller(collectionID, _controllerName),
			);
		},
		POST: (_path, _controllerName, _validations) => {
			router.post(
				_path,
				requestValidator(_validations),
				controller(collectionID, _controllerName),
			);
		},
		PUT: (_path, _controllerName, _validations) => {
			router.put(
				_path,
				requestValidator(_validations),
				controller(collectionID, _controllerName),
			);
		},
		DELETE: (_path, _controllerName, _validations) => {
			router.put(
				_path,
				requestValidator(_validations),
				controller(collectionID, _controllerName),
			);
		},
	};

	routes.forEach((routeConfig) => {
		const {
			path = null,
			method,
			controllerName,
			requestValidations = {},
		} = routeConfig;

		try {
			routeHelper[method](path, controllerName, requestValidations);
		} catch (error) {
			throw new Error(error);
		}
	});

	return router;
};

module.exports = routeMapper;
