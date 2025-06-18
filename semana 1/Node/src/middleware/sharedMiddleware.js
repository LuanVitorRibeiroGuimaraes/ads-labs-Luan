const express = require('express')

function requestData(res, data) {
    if (!data) {
        return res.status(404).json({
            message: 'Dados não informados!'
        })
    }
}

module.exports = {
    requestData,
}