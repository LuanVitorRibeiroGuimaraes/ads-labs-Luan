const restauranteService = require('../service/restauranteService');

async function getClientesMaisPedidos(req, res) {
  try {
    const dados = await restauranteService.relatorioClienteMaisPedidos();
    res.status(200).json(dados);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os clientes com mais pedidos' });
  }
}

async function getPratosMaisPedidos(req, res) {
  try {
    const dados = await restauranteService.pratosMaisPedidos();
    res.status(200).json(dados);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os pratos mais pedidos' });
  }
}

async function getClientesMaisGastaram(req, res) {
  try {
    const dados = await restauranteService.clientesQueMaisGastaram();
    res.status(200).json(dados);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os clientes que mais gastaram' });
  }
}

async function getAllRestaurantes(req, res) {
    try {
        const restaurantes = await restauranteService.getAllRestaurantes();
        return res.status(200).json(restaurantes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function getRestaurante(req, res) {
    try {
        const {id} = req.params;

        const restaurante = await restauranteService.getRestaurante(id);

        return res.status(200).json({restaurante});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

async function updateRestaurante(req, res) {
    try {
        const {id} = req.params;
        const data = req.body;

        await restauranteService.updateRestaurante(data, id);
        return res.status(200).json({message: "Restaurante atualizado com sucesso."});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

module.exports = {
    getClientesMaisPedidos,
    getPratosMaisPedidos,
    getClientesMaisGastaram,
    getAllRestaurantes,
    getRestaurante,
    updateRestaurante,
}