const Cliente = require('../models/cliente');

async function getAllClientes() {
    return await Cliente.findAll();
}

async function getClienteById(id_cliente) {
    return await Cliente.findByPk(id_cliente);
}

async function getCliente(data) {
    return await Cliente.findOne({ where: data});
}

async function createCliente(data) {
    return await Cliente.create(data);
}

async function updateCliente(newData, id_cliente) {
    return await Cliente.update(newData, { where: {id_cliente: id_cliente} });
}

async function deleteCliente(id_cliente) {
    return await Cliente.destroy({where: {id_cliente: id_cliente}});
}

module.exports = {
    getAllClientes,
    getClienteById,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente,
}