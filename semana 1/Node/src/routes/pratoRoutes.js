const express = require('express');
const pratoRouter = express.Router();

const pratoMiddleware = require('../middleware/pratoMiddleware');

const pratoController = require('../controller/pratoController');

pratoRouter.get('/', pratoController);

pratoRouter.post('/', pratoController);

pratoRouter.put('/', pratoController);

pratoRouter.delete('/', pratoController);