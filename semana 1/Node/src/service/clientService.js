const express = require('express')

const clientMiddleware = {
    validarNome,
    validarCPF,
    validarEmail,
    validarIdade,
    validarTelefone,
} = require('../middleware/clientMiddleware')

const sharedMiddleware = { requestData } = require('../middleware/sharedMiddleware')

function getClient(req, res) {
    const data = req.body

    sharedMiddleware.requestData(data)

    //verificar se o nome e email vieram para buscar no banco
    //validar os 2
    //buscar no banco
    //retornar se encontrar e se não encontrar, retornar um erro
}

function createClient(req, res) {
    const data = req.body

    sharedMiddleware.requestData(data)

    //validar os dados
    //instanciar e criar o usuário
    //retornar a mensagem de erro ou sucesso
}

function updateClient() {
    const data = req.body

    sharedMiddleware.requestData(data)

    //validar se veio o email e o nome
    //validar esses campos
    //validar os novos dados que foram enviados
    //buscar os dados
    //atualizar os dados e retornar as mensagens
    //se não encontrar e não der certo, retornar as mensagens de erro
}

function deleteClient() {
    const data = req.body

    sharedMiddleware.requestData(data)

    //verificar se o id, nome e email vieram
    //buscar no banco po resse usuário
    //se não encontrar, retornar erro
    //se encontrar, deletar e retornar o nome e id do usuário deletado
}
