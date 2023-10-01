const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

// GET Requests (Read)
routes.get('/', contactsController.getAll);
routes.get('/:id', contactsController.getSingle);

// POST Requests (Create)
routes.post('/', contactsController.createContact);

// PUT Requests (Update)
routes.put('/:id', contactsController.updateContact);

// DELETE Requests (Delete)
routes.delete('/:id', contactsController.deleteContact);


module.exports = routes;