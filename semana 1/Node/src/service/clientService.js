const express = require('express')
const cliente = require('../models/cliente')

function getClient(data) {
    const { id_cliente } = data

    if(!data) {
        throw new Error("ID do cliente é obrigatório.") 
    }
}

function createClient() {
    
}

function updateClient() {

}

function deleteClient() {

}

module.exports = {
    getClient,
    createClient,
    updateClient,
    deleteClient,
}
