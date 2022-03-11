const { Joi } = require('celebrate');

const routeConfigValidator = (options) => {
	const {
		resourceID,
		collectionConfig,
		controllers,
	} = options;

	const schema = Joi.object().keys({
		resourceID: Joi.string().valid(...Object.keys(controllers)).required(),
		routes: Joi.array().items(
			Joi.object().keys({
				controllerName: Joi.string().valid(...Object.keys(controllers[resourceID])),
			}),
		),
	});

	const result = schema.validate(collectionConfig, { allowUnknown: true });

	// eslint-disable-next-line no-console
	console.log(result.error);
};

module.exports = routeConfigValidator;
