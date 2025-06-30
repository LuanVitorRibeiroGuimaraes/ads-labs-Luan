const express = require('express');
const pratoRouter = express.Router();

const pratoMiddleware = require('../middleware/pratoMiddleware');

const pratoController = require('../controller/pratoController');

pratoRouter.get('/all', pratoController.getAllPratos);

pratoRouter.get('/:id', pratoController.getPrato);

pratoRouter.post('/', 
    pratoMiddleware.nome,
    pratoMiddleware.valor,
    pratoController.createPrato);

pratoRouter.put('/:id', 
    pratoMiddleware.nome,
    pratoMiddleware.valor,
    pratoController.updatePrato);

pratoRouter.delete('/:id', pratoController.deletePrato);

module.exports = pratoRouter;