const express = require('express')
const restaurantRouter = express.Router()

const restaurantController = require('../controller/restaurantController')

restaurantRouter.get('/', restaurantController.listRestaurants)

restaurantRouter.post('/', restaurantController.createRestaurant)

restaurantRouter.post('/', restaurantController.createDish)

restaurantRouter.put('/:id', restaurantController.updateRestaurant)

restaurantRouter.put('/:id', restaurantController.updateDish)

restaurantRouter.delete('/:id', restaurantController.deleteRestaurant)

restaurantRouter.delete('/:id', restaurantController.deleteDish)

module.exports = {
    restaurantRouter,
}
