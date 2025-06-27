const Pedido = require('../models/pedido');
const pedidoRepository = require('../repository/pedidoRepository');

async function getAllPedidos() {
    return await pedidoRepository.getAllPedidos();
}

async function getPedido(id_pedido) {
    if(!id_pedido) {
        throw new Error("O ID do pedido é obrigatório.");
    }
    
    const findPedido = await pedidoRepository.getPedido({id_pedido});
    
    if(!findPedido) {
        throw new Error("Pedido não encontrado.");
    }

    return findPedido;
}

async function createPedido(data) {
    if(!data) {
    throw new Error("Os dados são obrigatórios.");
    }

    const pedidoCriado = await pedidoRepository.createPedido(data);

    if(!pedidoCriado) {
        throw new Error("Nãp foi possível criar o pedido.");
    }

    return pedidoCriado;
}

async function updatePedido(newData, id_pedido) {
    if(!id_pedido) {
        throw new Error("O ID deve ser informado.");
    }
    
    if(!newData) {
        throw new Error("Os novos dados devem ser informados.");
    }

    const findPedido = await getPedido(id_pedido);

    if(!findPedido) {
        throw new Error("Pedido não encontrado.");
    }

    const updatePedido = await pedidoRepository(newData, {id_pedido});

    if(!updatePedido) {
        throw new Error("Não foi possível atualizar o pedido.");
    }

    return updatePedido;
}

async function deletePedido(id_pedido) {
    if(!id_pedido) {
        throw new Error("O ID do pedido é obrigatório.");
    }

    const findPedido = await getPedido(id_pedido);

    if(!findPedido) {
        throw new Error("Pedido não encontrado.");
    }

    const deletePedido = await pedidoRepository.deletePedido(id_pedido);

    if(!deletePedido) {
        throw new Error("Não foi possível deletar o pedido.");
    }

    return findPedido;
}

module.exports = {
    getAllPedidos,
    getPedido,
    createPedido,
    updatePedido,
    deletePedido,
}