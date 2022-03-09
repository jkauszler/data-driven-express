const { Joi } = require('celebrate');

// Is there a beneficial way to represent the mongo object here?

// NOTE: THE ORDER OF ROUTES MATTER!!!
const customer = {
	collectionID: 'customer',
	routes: [
		{
			name: 'read',
			path: '/',
			method: 'READ',
			permissions: [
				'customer:read',
				'customer:*',
			],
		},
		{
			name: 'create',
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
			name: 'update',
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
	],
};

module.exports = customer;