const express = require('express');
const pedidoRouter = express.Router();

const pedidoMiddleware = require('../middleware/pedidoMiddleware');

const pedidoController = require('../controller/pedidoController');

pedidoRouter.get('/all', pedidoController.getAllPedidos);

pedidoRouter.get('/:id', 
    pedidoMiddleware.validateId,
    pedidoController.getPedidos);

pedidoRouter.post('/',
    pedidoMiddleware.validateData,
    pedidoMiddleware.id_restaurante,
    pedidoMiddleware.id_prato,
    pedidoMiddleware.id_cliente,
    pedidoController.createPedido);

pedidoRouter.put('/:id',
    pedidoMiddleware.validateData,
    pedidoMiddleware.id_restaurante,
    pedidoMiddleware.id_prato,
    pedidoController.updatePedido);

pedidoRouter.delete('/:id', 
    pedidoMiddleware.validateId,
    pedidoController.deletePedido);

module.exports = pedidoRouter;