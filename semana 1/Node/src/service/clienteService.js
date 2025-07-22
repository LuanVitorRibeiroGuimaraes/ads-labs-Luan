const clienteRepository = require('../repository/clienteRepository');

async function getAllClientes() {
    const getAll = await clienteRepository.getAllClientes();

    if (!getAll) {
        throw new Error("Não existem clientes cadastrados no sistema.");
    }

    return getAll;
}

async function getCliente(id_cliente) {
    const findCliente = await clienteRepository.getClienteById(id_cliente);

    if (!findCliente) {
        throw new Error("Cliente não encontrado.");
    }

    return findCliente;
}

async function createClienteService(data) {
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

async function updateCliente(newData, id) {
    const findCliente = await clienteRepository.getClienteById(id);

    if (!findCliente) {
        throw new Error("Cliente não encontrado.");
    }

    const [contUpdateCliente] = await clienteRepository.updateCliente(newData, id);

    if (contUpdateCliente === 0) {
        throw new Error("Não foi possível atualizar o cliente.");
    }

    return contUpdateCliente;
}

async function deleteCliente(id_cliente) {
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
    createClienteService,
    updateCliente,
    deleteCliente,
}