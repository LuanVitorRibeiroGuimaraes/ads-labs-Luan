const express = require('express')
const clienteRouter = express.Router()

const clienteMiddlware = require('../middleware/clientMiddleware')

const clientController = require('../controller/clientController')

clienteRouter.get('/', clientController.getAllClientes)

clienteRouter.get('/', clientController.getClientes)

clienteRouter.post('/', clientController.createClientes)

clienteRouter.put('/', clientController.updateClientes)

clienteRouter.delete('/', clientController.deleteClientes)

module.exports = {
    clienteRouter,
}
