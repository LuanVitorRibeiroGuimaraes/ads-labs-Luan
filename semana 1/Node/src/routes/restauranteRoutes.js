const express = require('express');
const restauranteRouter = express.Router();

const restauranteMiddleware = require('../middleware/restauranteMiddleware');
const restauranteController = require('../controller/restauranteController');

restauranteRouter.get('/maisPedidosCliente', 
    restauranteController.getClientesMaisPedidos);

restauranteRouter.get('/maisPedidosPratos', 
    restauranteController.getPratosMaisPedidos);

restauranteRouter.get('/maisGastosClientes', 
    restauranteController.getClientesMaisGastaram);

restauranteRouter.get('/all', 
    restauranteController.getAllRestaurantes);

restauranteRouter.get('/:id', 
    restauranteMiddleware.validateId,
    restauranteController.getRestaurante);

restauranteRouter.put('/:id',  
    restauranteMiddleware.validateId,
    restauranteMiddleware.validateData,
    restauranteMiddleware.nomeRestaurante,
    restauranteMiddleware.contatoRestaurante,
    restauranteController.updateRestaurante);

module.exports = restauranteRouter;
