const pratoService = require('../service/pratoService');

async function getAllPratos(req, res) {
    try {
        const allPratos = await pratoService.getAllPratos();
        return res.status(200).json(allPratos);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function getPrato(req, res) {
    try {
    const {id} = req.params;

        const getPrato = await pratoService.getPrato(id);
        return res.status(200).json(getPrato)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function createPrato(req, res) {
    try {
        const data = req.body;

        await pratoService.createPrato(data);
        return res.status(201).json({
            message: "Prato criado com sucesso."
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function updatePrato(req, res) {
    try {
        const {id} = req.params;
        const newData = req.body;

        await pratoService.updatePrato(newData, id);
        return res.status(200).json({
            message: "Prato atualizado com sucesso."
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function deletePrato(req, res) {
    try {
        const {id} = req.params

        await pratoService.deletePrato(id);
        return res.status(200).json({
            message: "Prato deletado com sucesso."
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getAllPratos,
    getPrato,
    createPrato,
    updatePrato,
    deletePrato,
}