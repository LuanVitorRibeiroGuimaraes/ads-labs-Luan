const express = require('express');
const pedidoRouter = express.Router();

const pedidoMiddleware = require('../middleware/pedidoMiddleware');

const pedidoController = require('../controller/pedidoController');

pedidoRouter.get('/', pedidoController);

pedidoRouter.post('/', pedidoController);

pedidoRouter.put('/', pedidoController);

pedidoRouter.delete('/', pedidoController);