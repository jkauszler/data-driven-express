const customer = {
	READ: (req, res) => res.send('Reading'),
	PUT: (req, res) => res.send('Updating'),
	POST: (req, res) => res.send('Creating'),
	DELETE: (req, res) => res.send('Deleting'),
};

module.exports = customer;
