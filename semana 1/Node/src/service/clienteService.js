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
    const emailExistente = clienteRepository.getCliente({email: data.email})
    const cpfExistente = clienteRepository.getCliente({cpf: data.cpf})

    if(emailExistente) {
        throw new Error("Esse email já está em uso.");
    }

    if(cpfExistente) {
        throw new Error("Esse cpf já está em uso.");
    }

    const createCliente = await clienteRepository.updateCliente(newData, { id_cliente });

    if(!createCliente) {
        throw new Error("Não foi possível criar o cliente.");
    }

    return createCliente;
}

async function updateCliente(newData, data) {
    const findCliente = await clienteRepository.getCliente({id_cliente: data.id_cliente});

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

    const deleteCliente = await clienteRepository.deleteCliente({findCliente});

    if(!deleteCliente) {
        throw new Error("Não foi possível deletar o cliente.");
    }

    return deleteCliente;
}

module.exports = {
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente,
}
