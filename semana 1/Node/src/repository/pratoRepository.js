const Prato = require('../models/prato');

async function getAllPratos() {
    return await Prato.findAll();
}

async function getPratoById(id_prato) {
    return await Prato.findByPk(id_prato);
}

async function getPrato(data) {
    return await Prato.findOne({where: data});
}

async function createPrato(data) {
    return await Prato.create(data);
}

async function updatePrato(newData, id_prato) {
    return await Prato.update(newData, {where: {id_prato: id_prato}});
}

async function deletePrato(id_prato) {
    return await Prato.destroy({where: {id_prato: id_prato}});
}

module.exports = {
    getAllPratos,
    getPratoById,
    getPrato,
    createPrato,
    updatePrato,
    deletePrato,
}