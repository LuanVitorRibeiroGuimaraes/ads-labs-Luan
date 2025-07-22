const { Prato } = require('../models/prato');

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

async function updatePrato(newData, id) {
    return await Prato.update(newData, {where: {id: id}});
}

async function deletePrato(id) {
    return await Prato.destroy({where: {id: id}});
}

module.exports = {
    getAllPratos,
    getPratoById,
    getPrato,
    createPrato,
    updatePrato,
    deletePrato,
}