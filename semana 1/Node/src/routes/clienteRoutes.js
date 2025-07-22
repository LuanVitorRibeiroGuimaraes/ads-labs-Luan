const express = require('express');
const clienteRouter = express.Router();

const clienteMiddlware = require('../middleware/clienteMiddleware');

const clienteController = require('../controller/clienteController');

clienteRouter.get('/all', clienteController.getAllClientes);

clienteRouter.get('/:id', 
    clienteMiddlware.validateId,
    clienteController.getCliente);

clienteRouter.post('/',
    clienteMiddlware.validateData,
    clienteMiddlware.nome,
    clienteMiddlware.idade,
    clienteMiddlware.cpf,
    clienteMiddlware.email,
    clienteMiddlware.senha,
    clienteController.createCliente);

clienteRouter.put('/:id',
    clienteMiddlware.validateId,
    clienteMiddlware.validateDataWithoutSenha,
    clienteMiddlware.nome,
    clienteMiddlware.idade,
    clienteMiddlware.cpf,
    clienteMiddlware.email,
    clienteController.updateCliente);

clienteRouter.delete('/:id', 
    clienteMiddlware.validateId,
    clienteController.deleteCliente);

module.exports = clienteRouter;
