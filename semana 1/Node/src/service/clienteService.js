const clienteRepository = require('../repository/clienteRepository');

async function getAllClientes() {
    const getAll = await clienteRepository.getAllClientes();

    if (!getAll) {
        throw new Error("Não existem clientes cadastrados no sistema.");
    }

    return getAll;
}

async function getCliente(id_cliente) {
    if (!id_cliente) {
        throw new Error("O ID do cliente é obrigatório.");
    }

    const findCliente = await clienteRepository.getClienteById(id_cliente);

    if (!findCliente) {
        throw new Error("Cliente não encontrado");
    }

    return findCliente;
}

async function createCliente(data) {
    const emailExistente = await clienteRepository.getCliente({ email: data.email });
    const cpfExistente = await clienteRepository.getCliente({ cpf: data.cpf });

    if (emailExistente) {
        throw new Error("Esse email já está em uso.");
    }

    if (cpfExistente) {
        throw new Error("Esse cpf já está em uso.");
    }

    const createCliente = await clienteRepository.createCliente(data);

    if (!createCliente) {
        throw new Error("Não foi possível criar o cliente.");
    }

    return createCliente;
}

async function updateCliente(newData, id_cliente) {
    const findCliente = await clienteRepository.getClienteById(id_cliente);

    if (!findCliente) {
        throw new Error("Cliente não encontrado.");
    }

    const [contUpdateCliente] = await clienteRepository.updateCliente(newData, id_cliente);

    if (contUpdateCliente === 0) {
        throw new Error("Não foi possível atualizar o cliente.");
    }

    return contUpdateCliente;
}

async function deleteCliente(id_cliente) {
    if (!id_cliente) {
        throw new Error("O ID do cliente é obrigatório.");
    }

    const findCliente = await clienteRepository.getClienteById(id_cliente);

    if (!findCliente) {
        throw new Error("Cliente não encontrado.");
    }

    const clienteDeletado = await clienteRepository.deleteCliente(id_cliente);

    if (clienteDeletado === 0) {
        throw new Error("Não foi possível deletar o cliente.");
    }

    return clienteDeletado;
}

module.exports = {
    getAllClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente,
}