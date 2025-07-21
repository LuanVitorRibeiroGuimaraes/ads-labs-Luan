const userRepository = require('../repository/userRepository');

async function getAllUsers() {
    const getAll = await userRepository.getAllUsers();

    if(!getAll) {
        throw new Error("Não existem usuários cadastrados");
    }

    return getAll;
}

async function getUser(id) {
    const findUser = await userRepository.getUserById(id);

    if(!id) {
        throw new Error("Usuário não encontrado.");
    }

    return findUser;
}

async function createUser(data) {
    const existEmail = await userRepository.getUser({ email: data.email });

    if(existEmail) {
        throw new Error("Esse email já está em uso.");
    }

    const createUser = await userRepository.createUser(data);

    if(!createUser) {
        throw new Error("Não foi possível criar o usuário.");
    }

    return createUser;
}

async function updateUser(newData, id) {
    const findUser = await userRepository.getUserById(id);

    if(!findUser) {
        throw new Error("Usuário não encontrado.");
    }

    const [updateUser] = await userRepository.updateUser(newData, id);

    if(updateUser === 0) {
        throw new Error("Não foi possível atualizar o usuário");
    }

    return updateUser;
}

async function deleteUser(id) {
    const findUser = await userRepository.getUserById(id);

    if(!findUser) {
        throw new Error("Usuário não encontrado.");
    }

    const deleteUser = await userRepository.deleteUser(id);

    if(deleteUser === 0) {
        throw new Error("Não foi possível deletar o Usuário");
    }

    return deleteUser;
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}