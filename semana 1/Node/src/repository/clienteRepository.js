const { Cliente } = require('../models/cliente');

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

async function updateCliente(newData, id) {
    return await Cliente.update(newData, { where: {id: id} });
}

async function deleteCliente(id) {
    return await Cliente.destroy({where: {id: id}});
}

module.exports = {
    getAllClientes,
    getClienteById,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente,
}