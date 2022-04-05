import express from 'express';
var debug = require('debug')('identity:server');
import logger from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import makeExpressCallback from './express';
import userController from './controllers';
import http from 'http';

dotenv.config();

const apiRoot = process.env.API_ROOT;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
	res.send('Unicorn Store Identity Microservice REST API');
});
app.post(`/${apiRoot}/register`, makeExpressCallback(userController.post));
app.post(`/${apiRoot}/login`, makeExpressCallback(userController.login));
app.post(`/${apiRoot}/auth`, makeExpressCallback(userController.authorize));

// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT);
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, '0.0.0.0');
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
	var port = parseInt(val, 10);
	// named pipe
	if (isNaN(port)) return val;
	// port number
	if (port >= 0) return port;

	return false;
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug('Listening on ' + bind);
}
