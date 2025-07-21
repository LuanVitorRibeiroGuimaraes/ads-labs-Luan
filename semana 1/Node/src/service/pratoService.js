const Prato = require('../models/prato');
const pratoRepository = require('../repository/pratoRepository');

async function getAllPratos() {
    return pratoRepository.getAllPratos();
}

async function getPrato(id_prato) {
    const findPrato = await pratoRepository.getPratoById(id_prato);

    if(!findPrato) {
        throw new Error("Prato não encontrado.");
    }

    return findPrato;
}
async function createPrato(data) {    
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
    const findPrato = await pratoRepository.getPratoById(id_prato);
    const nomePrato = await pratoRepository.getPrato({nome: newData.nome});

    if(!findPrato) {
        throw new Error("Prato não encontrado");
    }

    if(nomePrato) {
        throw new Error('Esse prato já está cadastrado.');
    }

    const [pratoAtualizado] = await pratoRepository.updatePrato(newData, id_prato);

    if(pratoAtualizado === 0) {
        throw new Error("Não foi possível atualizar o prato.");
    }

    return pratoAtualizado;
}

async function deletePrato(id_prato) {
    const findPrato = await getPrato(id_prato);

    if(!findPrato) {
        throw new Error("Prato não encontrado");
    }

    const pratoDeletado = await pratoRepository.deletePrato(id_prato); //coloquei em array para ver as linhas afetadas

    if(pratoDeletado === 0) {
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