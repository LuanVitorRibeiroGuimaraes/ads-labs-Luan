const pedidoRepository = require('../repository/pedidoRepository');
const restauranteRepository = require('../repository/restauranteRepository');
const clienteRepository = require('../repository/clienteRepository');
const Cliente = require('../models/cliente');
const Prato = require('../models/prato');

async function getAllPedidos() {
    return await pedidoRepository.getAllPedidos();
}

async function getPedido(id_pedido) {
    const findPedido = await pedidoRepository.getPedidoById(id_pedido);
    
    if (!findPedido) {
        throw new Error("Pedido não encontrado.");
    }

    return findPedido;
}

async function createPedido(data) {
    const restaurante = await restauranteRepository.getRestauranteById(data.id_restaurante);
    const cliente = await clienteRepository.getClienteById(data.cliente_id);

    if(!restaurante) {
        throw new Error('Restaurante não encontrado');
    }

    if(!cliente) {
        throw new Error('Cliente não encontrado');
    }

    const pedidoCriado = await pedidoRepository.createPedido(data);

    if (!pedidoCriado) {
        throw new Error("Não foi possível criar o pedido.");
    }

    return pedidoCriado;
}

async function updatePedido(newData, id_pedido) {
    const findPedido = await pedidoRepository.getPedidoById(id_pedido);

    if (!findPedido) {
        throw new Error("Pedido não encontrado.");
    }

    const [updatedPedido] = await pedidoRepository.updatePedido(newData, id_pedido);

    if (updatedPedido === 0) {
        throw new Error("Não foi possível atualizar o pedido.");
    }

    return updatedPedido;
}

async function deletePedido(id_pedido) {
    const findPedido = await getPedido(id_pedido);

    if (!findPedido) {
        throw new Error("Pedido não encontrado.");
    }

    const deletedPedido = await pedidoRepository.deletePedido({id_pedido: id_pedido});

    if (deletedPedido == 0) {
        throw new Error("Não foi possível deletar o pedido.");
    }

    return deletedPedido;
}

module.exports = {
    getAllPedidos,
    getPedido,
    createPedido,
    updatePedido,
    deletePedido,
}