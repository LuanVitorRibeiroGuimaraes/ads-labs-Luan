const clienteService = require('../service/clienteService');
const clienteRepository = require('../repository/clienteRepository');

async function getAllClientes(req, res) {
    try {
        const findAllClientes = await clienteRepository.getAllClientes();
        return res.status(200).json({ message: findAllClientes });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function getCliente(req, res) {
    try {
        const { id_cliente } = req.params;

        const getUser = await clienteService.getCliente(id_cliente);
        return res.status(200).json({
            message: [getUser]
        });
    }
    catch(error) {
        return res.status(500).json({
            message: "Não foi possível encontrar o cliente"
        });
    }
}

async function createCliente(req, res) {
    try {
        const data = req.body;

        await clienteService.createCliente(data);
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
        const {id_cliente} = req.params;
        const { cpf, idade, nome } = req.body;
        const newData = req.body;

        if(cpf || idade || nome) {
            return res.status(400).json({
                message: "Não é possível alterar, cpf, idade ou nome."
            });
        }

        await clienteService.updateCliente(id_cliente, newData);
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
        const { id } = req.params;

        await clienteService.deleteCliente(id);
        return res.status(200).json({
            message: "Ciente deletado com sucesso."
        });
    } catch (error) {
        return res.status(400).json({
            message: "Não foi possível deletar o cliente"
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