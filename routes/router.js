const users = require('../controllers/users');

const routes = [
	users
];

const setRoutes = (app) => {
	routes.forEach((route) => {
		app.use('/api/v1', route);
	});
};

module.exports = { setRoutes };
