const clienteService = require('../service/clienteService');

async function getAllClientes(req, res) {
    try {
        const findAllClientes = await clienteService.getAllClientes();
        return res.status(200).json(findAllClientes);
    } catch (error) {
        return res.status(404).json({
            message: error.message
        });
    }
}

async function getCliente(req, res) {
    try {
        const {id} = req.params;

        const getUser = await clienteService.getCliente(id);
        return res.status(200).json( getUser);
    }
    catch(error) {
        return res.status(404).json({
            message: "Não foi possível encontrar o cliente"
        });
    }
}

async function createCliente(req, res) {
    try {
        const data = req.body;

        await clienteService.createClienteService(data);
        return res.status(201).json({
            message: "Usuário Criado com sucesso."
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function updateCliente(req, res) {
    try {
        const {id} = req.params;
        const newData = req.body;

        await clienteService.updateCliente(newData, id);
        return res.status(200).json({
            message: "Cliente atualizado com sucesso."
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

async function deleteCliente(req, res) {
    try {
        const {id} = req.params;

        await clienteService.deleteCliente(id);
        return res.status(200).json({
            message: "Ciente deletado com sucesso."
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    getAllClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente,
}