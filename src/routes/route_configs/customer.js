const { Joi } = require('celebrate');

// Is there a beneficial way to represent the mongo object here?

// NOTE: JUST LIKE OTHER EXPRESS ROUTES,
// THE ORDER OF ITEMS IN THE ROUTES ARRAY MATTER!!!
const customer = {
	resourceID: 'customer',
	routes: [
		{
			name: 'NO_PERMISSIONS',
			path: '/np',
			method: 'GET',
		},
		{
			name: 'LIST',
			path: '/',
			method: 'GET',
			permissions: [
				'customer:read',
				'customer:*',
			],
		},
		{
			name: 'CREATE',
			path: '/create',
			method: 'POST',
			permissions: [
				'customer:create',
				'customer:*',
			],
			requestValidations: {
				body: {
					email: Joi.string().required(),
					name: Joi.string().required(),
					dob: Joi.string(),
					savePaymentInfo: Joi.bool(),
					stripeCustomerId: Joi.string(),
					phone: Joi.string(),
				},
			},
		},
		{
			name: 'UPDATE',
			path: '/update/:id',
			method: 'PUT',
			permissions: [
				'customer:update',
				'customer:*',
			],
			requestValidations: {
				query: {
					id: Joi.string().required(),
				},
			},
		},
		{
			name: 'USE_CELEBRATE',
			path: '',
			method: 'USE',
		},
	],
};

module.exports = customer;
