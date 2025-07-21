// const { where } = require('sequelize');
const { User } = require('../models/user');

async function getAllUsers() {
    return await User.findAll();
}

async function getUserById(id_user) {
    return await User.findByPk(id_user);
}

async function getUser(data) {
    return await User.findOne({ where : data });
}

async function createUser(data) {
    return await User.create(data);
}

async function updateUser(newData, id) {
    return await User.update(newData, { where: { id: id } });
}

async function deleteUser(id) {
    return await User.destroy({ where: { id: id }});
}

module.exports = {
    getAllUsers,
    getUserById,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}