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

restauranteRouter.post('/', 
    restauranteMiddleware.validateData,
    restauranteMiddleware.nomeRestaurante,
    restauranteMiddleware.contatoRestaurante,
    restauranteController.createRestaurante);

restauranteRouter.put('/:id',  
    restauranteMiddleware.validateId,
    restauranteMiddleware.validateData,
    restauranteMiddleware.nomeRestaurante,
    restauranteMiddleware.contatoRestaurante,
    restauranteController.updateRestaurante);

restauranteRouter.delete('/:id', 
    restauranteMiddleware.validateId,
    restauranteController.deleteRestaurante);

module.exports = restauranteRouter;
