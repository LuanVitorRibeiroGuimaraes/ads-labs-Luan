const express = require('express')
const Cliente = require('../models/cliente')

async function getClient(req, res) {
    return await cliente.findByPk
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
