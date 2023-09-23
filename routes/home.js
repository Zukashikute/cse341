const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.jaredRoute);
routes.get('/ira', lesson1Controller.iraRoute);

module.exports = routes;