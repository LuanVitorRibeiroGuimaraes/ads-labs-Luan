const Restaurante = require('../models/restaurante');

async function getAllRestaurante() {
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

//gerar relatorios
async function getRelatorioMaiorValorGasto() {
    return await Restaurante.findAll({
        include: {
            model: Cliente,
            order: ['qtdValorGasto', 'DESC'],
            attributes: ['qtdValorGasto', 'nome', 'cpf', 'email']
        }
    });
}

async function getRelatorioMaisPedidos() {
    return await Restaurante.findAll({
        include: {
            model: Cliente,
            order: ['qtdPratosPedidos', 'DESC'],
            attributes: ['qtdPratosPedidos','nome', 'cpf', 'email']
        }
    });
}

module.exports = {
    getRelatorioMaiorValorGasto,
    getRelatorioMaisPedidos,
    getAllRestaurante,
    getRestauranteById,
    getRestaurante,
    createRestaurante,
    updateRestaurante,
    deleteRestaurante,
}