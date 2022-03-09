const {
	celebrate, Joi, Segments,
} = require('celebrate');

const joiOptions = {
	abortEarly: false,
	errors: {
		wrap: {
			label: '[]',
			array: '"',
		},
	},
};

const requestValidator = (
	{
		headerSchema,
		paramSchema,
		querySchema,
		cookieSchema,
		signedCookieSchema,
		bodySchema,
	},
) => {
	celebrate(
		// Passing Request properties in order of execution by celebrate
		{
			[Segments.HEADERS]: Joi.object().keys(headerSchema) || Joi.any(),
			[Segments.PARAMS]: Joi.object().keys(paramSchema) || Joi.any(),
			[Segments.QUERY]: Joi.object().keys(querySchema) || Joi.any(),
			[Segments.COOKIES]: Joi.object().keys(cookieSchema) || Joi.any(),
			[Segments.SIGNEDCOOKIES]: Joi.object(signedCookieSchema).keys() || Joi.any(),
			[Segments.BODY]: Joi.object().keys(bodySchema) || Joi.any(),
		},
		joiOptions,
	);
};

export default requestValidator;
