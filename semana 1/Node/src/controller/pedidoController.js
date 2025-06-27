const pedidoService = require('../service/pedidoService');
const pedidoRepository = require('../repository/pedidoRepository');

async function getAllPedidos(res) {
    try {
        const getAllPedidos = await pedidoRepository.getAllPedidos();

        return res.status(200).json({message: [getAllPedidos]});
    } catch (error) {
        return res.status(400).json({message: error.message});      
    }
}

async function getPedidos(req, res) {
    try {
        
    } catch (error) {
        
    }
}

async function createPedido(params) {
    try {
        
    } catch (error) {
        
    }
}

async function updatePedido(params) {
    try {
        
    } catch (error) {
        
    }
}

async function deletePedido(params) {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getAllPedidos,
    getPedidos,
    createPedido,
    updatePedido,
    deletePedido,
}