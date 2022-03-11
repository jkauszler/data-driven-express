const {
	celebrate, Joi, Segments,
} = require('celebrate');

const joiOptions = {
	abortEarly: true,
	errors: {
		wrap: {
			label: '[]',
			array: '"',
		},
	},
};

const requestValidator = (options) => {
	const {
		header = {},
		param = {},
		query = {},
		cookie = {},
		signedCookie = {},
		body = {},
	} = options;

	return celebrate(
		// Passing Request properties in order of execution by celebrate
		{
			[Segments.HEADERS]: Object.keys(header).length > 0
				? Joi.object().keys(header)
				: Joi.any(),
			[Segments.PARAMS]: Object.keys(param).length > 0
				? Joi.object().keys(param)
				: Joi.any(),
			[Segments.QUERY]: Object.keys(query).length > 0
				? Joi.object().keys(query)
				: Joi.any(),
			[Segments.COOKIES]: Object.keys(cookie).length > 0
				? Joi.object().keys(cookie)
				: Joi.any(),
			[Segments.SIGNEDCOOKIES]: Object.keys(signedCookie).length > 0
				? Joi.object().keys(signedCookie)
				: Joi.any(),
			[Segments.BODY]: Object.keys(body).length > 0
				? Joi.object().keys(body)
				: Joi.any(),
		},
		joiOptions,
	);
};

module.exports = requestValidator;
