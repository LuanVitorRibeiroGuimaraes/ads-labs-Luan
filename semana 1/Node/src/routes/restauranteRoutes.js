const express = require('express');
const restauranteRouter = express.Router();

const restauranteMiddleware = require('../middleware/restauranteMiddleware');
const restauranteController = require('../controller/restauranteController');

restauranteRouter.get('/', restauranteController.getAllRestaurantes);

restauranteRouter.get('/', restauranteController.getRestaurante);

restauranteRouter.post('/', 
    restauranteMiddleware.nomeRestaurante,
    restauranteMiddleware.contatoRestaurante,
    restauranteMiddleware.nomePrato,
    restauranteController.createRestaurante);

restauranteRouter.put('/:id',  
    restauranteMiddleware.nomeRestaurante,
    restauranteMiddleware.contatoRestaurante,
    restauranteMiddleware.nomePrato,
    restauranteController.updateRestaurante);

restauranteRouter.delete('/:id', restauranteController.deleteRestaurante);

module.exports = restauranteRouter;
