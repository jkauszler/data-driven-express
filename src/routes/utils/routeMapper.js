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
		GET: (_path, _method, _validations) => {
			router.get(
				_path,
				requestValidator(_validations),
				controller(collectionID, _method),
			);
		},
		POST: (_path, _method, _validations) => {
			router.post(
				_path,
				requestValidator(_validations),
				controller(collectionID, _method),
			);
		},
		PUT: (_path, _method, _validations) => {
			router.put(
				_path,
				requestValidator(_validations),
				controller(collectionID, _method),
			);
		},
		DELETE: (_path, _method, _validations) => {
			router.put(
				_path,
				requestValidator(_validations),
				controller(collectionID, _method),
			);
		},
	};

	routes.forEach((routeConfig) => {
		const {
			path,
			method,
			requestValidations = {},
		} = routeConfig;

		try {
			routeHelper[method](path, method, requestValidations);
		} catch (error) {
			throw new Error(error);
		}
	});

	// console.log(router.stack);
	return router;
};

module.exports = routeMapper;
