const Prato = require('../models/prato');
const pratoRepository = require('../repository/pratoRepository');

async function getAllPratos() {
    return pratoRepository.getAllPratos();
}

async function getPrato(id_prato) {
    if(!id_prato) {
        throw new Error("O ID é obrigatório.");
    }

    const findPrato = await pratoRepository.getPratoById(id_prato);

    if(!findPrato) {
        throw new Error("Prato não encontrado.");
    }

    return findPrato;
}
async function createPrato(data) {
    if(!data) {
        throw new Error("Dados não informados");
    }
    
    const pratoExistente = await pratoRepository.getPrato({nome: data.nome});

    if(pratoExistente) {
        throw new Error("Prato já cadastrado");
    }

    const pratoCriado = await pratoRepository.createPrato(data);

    if(!pratoCriado) {
        throw new Error("Não foi possível criar o prato.");
    }

    return pratoCriado;   
}

async function updatePrato(newData, id_prato) {
    const findPrato = getPrato(id_prato);

    if(!findPrato) {
        throw new Error("Prato não encontrado");
    }

    const pratoAtualizado = await pratoRepository.updatePrato(newData, {id_prato: id_prato});

    if(!pratoAtualizado) {
        throw new Error("Não foi possível atualizar o prato.");
    }

    return pratoAtualizado;
}

async function deletePrato(id_prato) {
    const findPrato = getPrato(id_prato);

    if(!findPrato) {
        throw new Error("Prato não encontrado");
    }

    const pratoDeletado = await pratoRepository.deletePrato({id_prato});

    if(!pratoDeletado) {
        throw new Error("Não foi possível deletar o prato.");
    }

    return pratoDeletado;
}

module.exports = { 
    getAllPratos,
    getPrato,
    createPrato,
    updatePrato,
    deletePrato,
}