const express = require('express');
const clienteRouter = express.Router();

const clienteMiddlware = require('../middleware/clienteMiddleware');

const clienteController = require('../controller/clienteController');

clienteRouter.get('/', clienteController.getAllClientes);

clienteRouter.get('/:id', clienteController.getCliente);

clienteRouter.post('/', 
    clienteMiddlware.nome,
    clienteMiddlware.cpf,
    clienteMiddlware.email,
    clienteMiddlware.numeroTelefone,
    clienteController.createCliente);

clienteRouter.put('/', 
    clienteMiddlware.nome,
    clienteMiddlware.cpf,
    clienteMiddlware.email,
    clienteMiddlware.numeroTelefone,
    clienteController.updateCliente);

clienteRouter.delete('/:id', clienteController.deleteCliente);

module.exports = clienteRouter;
