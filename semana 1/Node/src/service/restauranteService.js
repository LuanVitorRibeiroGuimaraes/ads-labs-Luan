const Restaurante = require('../models/restaurante');
const restauranteRepository = require('../repository/restauranteRepository');

// Buscar um restaurante por ID
async function getRestaurant(id_restaurate) {
    if(!id_restaurate) {
        throw new Error("O ID do restaurante é obrigatório")
    }

    const findRestaurante = await restauranteRepository.getRestauranteById(id_restaurate)

    if (!findRestaurante) {
        throw new Error('Restaurante não encontrado.');
    }

    return findRestaurante;
}

// Puxar em ordem os clientes com mais pedidos
async function getQtdPedidosCliente(req, res) {
    const findCliente = 10;
    // preciso de um relacionamento de clientes 
    // filtrar os clientes com mais pedidos
    // retornar os clientes em ordem de mais pedidos
}

async function getRelatorioMaiorValorGasto(params) {
    const findCliente = await restauranteRepository.getRestaurante({id_restaurante});
}

// Criar restaurante
async function createRestaurant(data) {

    const findNomeRestaurante = await restauranteRepository.getRestaurante({nomeRestaurante: data.nomeRestaurante});
    const findContatoRestaurante = await restauranteRepository.getRestaurante({contatoRestaurante: data.contatoRestaurante});

    if (findNomeRestaurante || findContatoRestaurante) {
        throw new Error('O restaurante já está cadastrado.');
    }

    const createRestaurante = await restauranteRepository.createRestaurante(data);

    if (!createRestaurante) {
        throw new Error('Não foi possível criar o restaurante.');
    }

    return createRestaurante;
}

// Atualizar restaurante
async function updateRestaurant(id_restaurante, data) {

    if(!id_restaurante) {
        throw new Error("O ID do restaurante é obrigatório");
    }

    const findRestaurante = await restauranteRepository.getRestauranteById({id_restaurante});

    if (!findRestaurante) {
        throw new Error('Restaurante não encontrado.');
    }

    const updateRestaurante = await restauranteRepository.updateRestaurante(data, {id_restaurante});

    if(!updateRestaurante) {
        throw new Error("Não foi possível atualizar os dados do restaurante");
    }

    return updateRestaurante;
}

// Deletar restaurante
async function deleteRestaurant(id_restaurante) {
    
    if(!id_restaurante) {
        throw new Error("O ID do restaurante é obrigatório");
    }

    const findRestaurante = await Restaurante.findByPk(id_restaurante);

    if (!findRestaurante) {
        throw new Error('Restaurante não encontrado.');
    }

    const deleteRestaurante = restauranteRepository.deleteRestaurante({findRestaurante});

    return findRestaurante;
}

module.exports = {
    getRestaurant,
    getQtdPedidosCliente,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
};
