const express = require('express');
const pedidoRouter = express.Router();

const pedidoMiddleware = require('../middleware/pedidoMiddleware');

const pedidoController = require('../controller/pedidoController');

pedidoRouter.get('/all', pedidoController.getAllPedidos);

pedidoRouter.get('/:id', pedidoController.getPedidos);

pedidoRouter.post('/', 
    pedidoMiddleware.id_restaurante,
    pedidoMiddleware.prato_id,
    pedidoMiddleware.cliente_id,
    pedidoController.createPedido);

pedidoRouter.put('/:id', 
    pedidoMiddleware.id_restaurante,
    pedidoMiddleware.prato_id,
    pedidoMiddleware.cliente_id,
    pedidoController.updatePedido);

pedidoRouter.delete('/:id', pedidoController.deletePedido);

module.exports = pedidoRouter;