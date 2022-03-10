const { errors } = require('celebrate');

const customer = {
	LIST: (req, res) => res.send('Listing'),
	UPDATE: (req, res) => res.send('Updating'),
	CREATE: (req, res) => res.send('Creating'),
	DELETE: (req, res) => res.send('Deleting'),
	NO_PERMISSIONS: (req, res) => res.send('Public customer info...'),
	USE_CELEBRATE: errors(),
};

module.exports = customer;
