const { Joi } = require('celebrate');

// Is there a beneficial way to represent the mongo object here?

// NOTE: JUST LIKE OTHER EXPRESS ROUTES,
// THE ORDER OF ITEMS IN THE ROUTES ARRAY MATTER!!!
const customer = {
	resourceID: 'customer',
	routes: [
		{
			path: '/',
			method: 'GET',
			controllerName: 'LIST',
		},
		{
			path: '/create',
			method: 'POST',
			controllerName: 'CREATE',
			requestValidations: {
				body: {
					email: Joi.string().required(),
					name: Joi.string().required(),
					dob: Joi.string(),
					savePaymentInfo: Joi.bool().default(true),
					stripeCustomerId: Joi.string(),
					phone: Joi.string(),
				},
			},
		},
		{
			path: '/update/:id',
			method: 'PUT',
			controllerName: 'UPDATE',
			permissions: [
				'customer:update',
				'customer:*',
			],
			requestValidations: {
				params: {
					id: Joi.string().required(),
				},
			},
		},
		{
			path: '',
			method: 'USE',
			controllerName: 'USE_CELEBRATE',
		},
	],
};

module.exports = customer;
