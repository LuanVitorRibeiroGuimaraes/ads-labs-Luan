const restauranteService = require('../service/restauranteService');
const restauranteRepository = require('../repository/restauranteRepository');

async function relatorioMaiorValorGasto(res){
    try {    
        return res.status(200).json({
            message: restauranteRepository.getRelatorioMaiorValorGasto
        });        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

async function relatorioMaisPedidos(res) {
    try {
        return res.status(200).json({
            message: restauranteRepository.getRelatorioMaisPedidos
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function getAllRestaurantes(res) {
    try {
        const findAllRestaurantes = await restauranteService.getRestaurant
        return res.status(200).json({message: [findAllRestaurantes]});
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function getRestaurante(req, res) {
    try {
        const {id_restaurante} = req.params;

        const restaurante = await restauranteService.getRestaurant(id_restaurante);

        return res.status(200).json({restaurante});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

async function createRestaurante(req, res) {
    try {
        const data = req.body;

        await restauranteService.createRestaurant(data);

        return res.status(201).json({message: "Restaurante criado com sucesso."});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

async function updateRestaurante(req, res) {
    try {
        const {id_restaurante} = req.params;
        const data = req.body;

        await restauranteService.updateRestaurant(id_restaurante, data);

        return res.status(200).json({message: "Restaurante atualizado com sucesso."});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

async function deleteRestaurante(req, res) {
    try {
        const {id_restaurante} = req.params;

        await restauranteService.deleteRestaurant(id_restaurante);
        
        return res.status(200).json({message: `Restaurante id:${id_restaurante} foi deletado com sucesso.`}); 
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

module.exports = {
    relatorioMaiorValorGasto,
    relatorioMaisPedidos,
    getAllRestaurantes,
    getRestaurante,
    createRestaurante,
    updateRestaurante,
    deleteRestaurante,
}