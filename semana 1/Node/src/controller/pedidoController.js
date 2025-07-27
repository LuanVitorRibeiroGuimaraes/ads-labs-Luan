const pedidoService = require('../service/pedidoService');

async function getAllPedidos(req, res) {
    try {
        const getAllPedidos = await pedidoService.getAllPedidos();
        return res.status(200).json(getAllPedidos);
    } catch (error) {
        return res.status(400).json({message: error.message});      
    }
}

async function getPedidos(req, res) {
    try {
        const {id} = req.params;

        const findPedido = await pedidoService.getPedido(id);
        return res.status(200).json(findPedido);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

async function createPedido(req, res) {
    try {
        const data = req.body;

        await pedidoService.createPedido(data);
        return res.status(201).json({
            message: "Pedido criado com sucesso."
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function updatePedido(req, res) {
    try {
        const {id} = req.params;
        const data = req.body;

        await pedidoService.updatePedido(data, id);
        return res.status(200).json({
            message: "Pedido atualizado com sucesso"
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

async function deletePedido(req, res) {
    try {
        const {id} = req.params;
        
        await pedidoService.deletePedido(id);
        return res.status(200).json({
            message: "O pedido foi deletado com sucesso"
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllPedidos,
    getPedidos,
    createPedido,
    updatePedido,
    deletePedido,
}