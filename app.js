const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

require('dotenv').config();

const app = express();

// const mongoDB = process.env.MONGODB_URI;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/v1', require('./src/routes/v1'));

app.get('/ping', (req, res) => {
	res.status(200).send('pong');
});

// ERROR TEST
app.get(
	'/error',
	(req, res, next) => {
		try {
			throw new Error('Uh Oh!');
		} catch (error) {
			next(error);
		}
	},
);

// catch 404's
app.use((req, res) => {
	res.status(404).json(
		{
			statusCode: 404,
			error: 'Not Found',
			message: 'Resource not found',
		},
	);
});

// error handler
app.use((err, req, res, next) => {
	res.status(500).json(
		{
			statusCode: 500,
			error: 'Internal Server Error',
			message: err.message,
		},
	);
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});

module.exports = app;
