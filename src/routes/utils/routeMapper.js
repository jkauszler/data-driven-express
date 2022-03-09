const express = require('express');

const router = express.Router();
const controller = require('../../controllers');

const routeMapper = (collectionConfig) => {
	const {
		collectionID,
		routes,
	} = collectionConfig;

	const routeHelper = {
		READ: (_path, _routeConfig) => {
			router.get(
				_path,
				controller(collectionID, _routeConfig.method),
			);
		},
		POST: (_path, _routeConfig) => {
			router.post(
				_path,
				controller(collectionID, _routeConfig.method),
			);
		},
		PUT: (_path, _routeConfig) => {
			router.put(
				_path,
				controller(collectionID, _routeConfig.method),
			);
		},
		DELETE: (_path, _routeConfig) => {
			router.put(
				_path,
				controller(collectionID, _routeConfig.method),
			);
		},
	};

	routes.forEach((routeConfig) => {
		const {
			path,
			method,
		} = routeConfig;

		try {
			routeHelper[method](path, routeConfig);
		} catch (error) {
			throw new Error(`Error on Route Mapper (routeMapper). Error: ${error}`);
		}
	});

	// console.log(router.stack);
	return router;
};

module.exports = routeMapper;
