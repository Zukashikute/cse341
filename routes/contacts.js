const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

// GET /feed/posts
routes.get('/contacts', contactsController.getAll);
routes.get('/contacts/:id', contactsController.getSingle);


module.exports = routes;