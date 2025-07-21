const express = require('express');
const pratoRouter = express.Router();

const pratoMiddleware = require('../middleware/pratoMiddleware');

const pratoController = require('../controller/pratoController');

pratoRouter.get('/all', pratoController.getAllPratos);

pratoRouter.get('/:id', 
    pratoMiddleware.validateId,
    pratoController.getPrato);

pratoRouter.post('/', 
    pratoMiddleware.validateData,
    pratoMiddleware.nome,
    pratoMiddleware.valor,
    pratoController.createPrato);

pratoRouter.put('/:id', 
    pratoMiddleware.validateId,
    pratoMiddleware.validateData,
    pratoMiddleware.nome,
    pratoMiddleware.valor,
    pratoController.updatePrato);

pratoRouter.delete('/:id', 
    pratoMiddleware.validateId,
    pratoController.deletePrato);

module.exports = pratoRouter;