const Cliente = require('../models/cliente');
const clienteRepository = require('../repository/clienteRepository');

async function getAllClientes(res, res) {
    //
}

async function getCliente(id_cliente) {

    if(!id_cliente) {
        throw new Error("O ID do cliente é obrigatório.");
    }

    const findCliente = await clienteRepository.getClienteById(id_cliente);

    if(!findCliente) {
        throw new Error("Cliente não encontrado");
    }

    return findCliente;
}

async function createCliente(data) {
    const emailExistente = await clienteRepository.getCliente({email: data.email})
    const cpfExistente = await clienteRepository.getCliente({cpf: data.cpf})

    if(emailExistente) {
        throw new Error("Esse email já está em uso.");
    }

    if(cpfExistente) {
        throw new Error("Esse cpf já está em uso.");
    }

    const createCliente = await clienteRepository.createCliente(data);

    if(!createCliente) {
        throw new Error("Não foi possível criar o cliente.");
    }

    return createCliente;
}

async function updateCliente(id_cliente, newData) {
    const findCliente = await clienteRepository.getClienteById(id_cliente);

    if(!findCliente) {
        throw new Error("Cliente não encontrado.");
    }

    const contUpdateCliente = await clienteRepository.updateCliente(newData, {id_cliente});

    if(contUpdateCliente == 0) {
        throw new Error("Não foi possível atualizar o cliente.");
    }

    return updateCliente;
}

async function deleteCliente(id_cliente) {

    if(!id_cliente) {
        throw new Error("O ID do cliente é obrigatório.");
    }

    const findCliente = await clienteRepository.getClienteById(id_cliente);

    if(!findCliente) {
        throw new Error("Cliente não encontrado.");
    }
    
    const clienteDeletado = await clienteRepository.deleteCliente({id_cliente});

    if(!clienteDeletado) {
        throw new Error("Não foi possível deletar o cliente.");
    }

    return clienteDeletado;
}

module.exports = {
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente,
}
