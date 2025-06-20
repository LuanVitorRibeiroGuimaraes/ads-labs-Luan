const express = require('express')
const restauranteRouter = express.Router()

const restaurantController = require('../controller/restaurantController')

restauranteRouter.get('/', restaurantController.listRestaurants)

restauranteRouter.post('/', restaurantController.createRestaurant)

restauranteRouter.post('/', restaurantController.createDish)

restauranteRouter.put('/:id', restaurantController.updateRestaurant)

restauranteRouter.put('/:id', restaurantController.updateDish)

restauranteRouter.delete('/:id', restaurantController.deleteRestaurant)

restauranteRouter.delete('/:id', restaurantController.deleteDish)

module.exports = {
    restauranteRouter,
}
