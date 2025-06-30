const express = require('express');
const clienteRouter = express.Router();

const clienteMiddlware = require('../middleware/clienteMiddleware');

const clienteController = require('../controller/clienteController');

clienteRouter.get('/all', clienteController.getAllClientes);

clienteRouter.get('/:id', clienteController.getCliente);

clienteRouter.post('/', 
    clienteMiddlware.nome,
    clienteMiddlware.cpf,
    clienteMiddlware.email,
    clienteController.createCliente);

clienteRouter.put('/:id',
    clienteMiddlware.email,
    clienteController.updateCliente);

clienteRouter.delete('/:id', clienteController.deleteCliente);

module.exports = clienteRouter;
