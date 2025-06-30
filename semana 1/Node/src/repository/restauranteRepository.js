const Restaurante = require('../models/restaurante');

async function getAllRestaurantes() {
    return await Restaurante.findAll();
}

async function getRestauranteById(id_restaurante) {
    return await Restaurante.findByPk(id_restaurante);
}

async function getRestaurante(data) {
    return await Restaurante.findOne({where: data});
}

async function createRestaurante(data) {
    return await Restaurante.create(data);
}

async function updateRestaurante(newData, id_restaurante) {
    return await Restaurante.update(newData, {where: {id_restaurante: id_restaurante}});
}

async function deleteRestaurante(id_restaurante) {
    return await Restaurante.destroy({where: {id_restaurante: id_restaurante}});
}

module.exports = {
    getAllRestaurantes,
    getRestauranteById,
    getRestaurante,
    createRestaurante,
    updateRestaurante,
    deleteRestaurante,
}