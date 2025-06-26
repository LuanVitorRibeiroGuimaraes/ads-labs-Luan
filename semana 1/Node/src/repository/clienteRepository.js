const Cliente = require('../models/cliente');

async function getAllClientes() {
    return await Cliente.findAll();
}

async function getClienteById(data) {
    return await Cliente.findByPk(data);
}

async function getCliente(data) {
    return await Cliente.findOne({ where: data });
}

async function createCliente(data) {
    return await Cliente.create(data);
}

async function updateCliente(newData, data) {
    return await Cliente.update(newData, { where: data });
}

async function deleteCliente(data) {
    return await Cliente.destroy({where: data});
}

module.exports = {
    getAllClientes,
    getClienteById,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente,
}