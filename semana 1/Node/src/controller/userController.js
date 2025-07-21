const userService = require('../service/userService');

async function getAllUsers(req, res) {
    try {
        const findAllUsers = await userService.getAllUsers();

        return res.staus(200).json({
            message: findAllUsers
        });
    }
    catch(error) {
        return res.status(404).json({
            message: error.message
        });
    }
}

async function getUser(req, res) {
    try {
        const { id } = req.params;

        const getUser = await userService.getUser(id);

        return res.status(200).json({
            message: getUser
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message
        });
    }
}

async function createUser(req, res) {
    try {
        const data = req.body;

        const createUser = await userService.createUser(data);

        return res.status(201).json({
            message: "Usuário criado com sucesso"
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const newData = req.body;
        const nome = req.body.nome;

        const updateUser = await userService.updateUser(newData, id);

        return res.staus(200).json({
            message: `Usuário "${nome}" foi atualizado com sucesso.`
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        
        const user = await userService.getUser(id);

        await userService.deleteUser(id);

        return res.status(200).json({
            message: `Usuário "${user.nome}" foi deletado.`
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
