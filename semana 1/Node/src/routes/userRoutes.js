const express = require('express');
const userRouter = express.Router();

const userMiddleware = require('../middleware/userMiddleware');

const userController = require('../controller/userController');

userRouter.get('/all',
    userController.getAllUsers);

userRouter.get('/:id',
    userMiddleware.validateId,
    userController.getUser);

userRouter.post('/',
    userMiddleware.validateData,
    userMiddleware.email,
    userMiddleware.senha,
    userMiddleware.role,
    userController.createUser);

userRouter.put('/:id',
    userMiddleware.validateId,
    userMiddleware.validateData,
    userMiddleware.email,
    userMiddleware.senha,
    userMiddleware.role,
    userController.updateUser);

userRouter.delete('/:id',
    userMiddleware.validateId,
    userController.deleteUser);

module.exports = userRouter;