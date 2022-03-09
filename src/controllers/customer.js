const { errors } = require('celebrate');

const customer = {
	LIST: (req, res) => res.send('Listing'),
	UPDATE: (req, res) => res.send('Updating'),
	CREATE: (req, res) => res.send('Creating'),
	DELETE: (req, res) => res.send('Deleting'),
	USE_CELEBRATE: errors(),
};

module.exports = customer;
