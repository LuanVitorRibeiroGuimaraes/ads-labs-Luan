const express = require('express');
const restauranteRouter = express.Router();

const restauranteMiddleware = require('../middleware/restauranteMiddleware');
const restauranteController = require('../controller/restauranteController');

restauranteRouter.get('/maisPedidosCliente', restauranteController.getClientesMaisPedidos);

restauranteRouter.get('/maisPedidosPratos', restauranteController.getPratosMaisPedidos);

restauranteRouter.get('/maisGastosClientes', restauranteController.getClientesMaisGastaram);

restauranteRouter.get('/all', restauranteController.getAllRestaurantes);

restauranteRouter.get('/:id', restauranteController.getRestaurante);

restauranteRouter.post('/', 
    restauranteMiddleware.nomeRestaurante,
    restauranteMiddleware.contatoRestaurante,
    restauranteController.createRestaurante);

restauranteRouter.put('/:id',  
    restauranteMiddleware.nomeRestaurante,
    restauranteMiddleware.contatoRestaurante,
    restauranteController.updateRestaurante);

restauranteRouter.delete('/:id', restauranteController.deleteRestaurante);

module.exports = restauranteRouter;
