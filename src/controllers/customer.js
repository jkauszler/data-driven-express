const { errors } = require('celebrate');

const customer = {
	LIST: (req, res) => res.send('Listing...'),
	CREATE: (req, res) => res.send('Creating...'),
	UPDATE: (req, res) => res.send('Updating...'),
	USE_CELEBRATE: errors(),
};

module.exports = customer;
