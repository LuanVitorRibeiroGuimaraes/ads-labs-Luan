const express = require('express')
const clientRouter = express.Router()

const clientMiddlware = require('../middleware/clientMiddleware')

const clientController = require('../controller/clientController')

clientRouter.get('/', clientController.getClient)

clientRouter.post('/', clientController.createClient)

clientRouter.put('/', clientController.updateClient)

clientRouter.delete('/', clientController.deleteClient)

module.exports = {
    clientRouter,
}
