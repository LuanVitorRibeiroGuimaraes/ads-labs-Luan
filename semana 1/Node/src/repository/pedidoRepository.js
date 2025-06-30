const Pedido = require('../models/pedido');

async function getAllPedidos() {
    return await Pedido.findAll();
}

async function getPedidoById(id_pedido) {
    return await Pedido.findByPk(id_pedido);
}

async function getPedido(data) {
    return await Pedido.findOne({where: data});
}

async function createPedido(data) {
    return await Pedido.create(data);
}

async function updatePedido(newData, id_pedido) {
    return await Pedido.update(newData, {where: {id_pedido: id_pedido}});
}

async function deletePedido(id_pedido) {
    return await Pedido.destroy({where: id_pedido});
}

module.exports = {
    getAllPedidos,
    getPedidoById,
    getPedido,
    createPedido,
    updatePedido,
    deletePedido,
}