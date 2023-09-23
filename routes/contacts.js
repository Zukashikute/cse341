const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

// GET
routes.get('/', contactsController.getAll);
routes.get('/:id', contactsController.getSingle);


module.exports = routes;