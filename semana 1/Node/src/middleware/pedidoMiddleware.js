const { errorMapper } = require('../shared/SchemaValidationHelper');

function id_restaurante(req, res, next) {
    const {id_restaurante} = req.body;

    if(!id_restaurante) {
        return res.status(400).json({
            message: errorMapper('id_restaurante', 'required')
        });
    }

    next();
}

function id_prato(req, res, next) {
    const {id_prato} = req.body;

    if(!id_prato) {
        return res.status(400).json({
            message: errorMapper('id_prato', 'required')
        });
    }

    next();
}

function id_cliente(req, res, next) {
    const {id_cliente} = req.body;

    if(!id_cliente) {
        return res.status(400).json({
            message: errorMapper('id_cliente', 'required')
        });
    }

    next();
}

function validateData(req, res, next) {
    const { id_restaurante } = req.body;
    const { id_prato } = req.body;
    const { id_cliente } = req.body;

    if(!id_restaurante) {
        return res.status(400).json({
            message: errorMapper('id_restaurante', 'required')
        });
    }

    if(!id_prato) {
        return res.status(400).json({
            message: errorMapper('id_prato', 'required')
        });
    }

    next();
}

function validateId(req, res, next) {
    const id = req.params.id;

    if(!id) {
        return res.status(400).json({
            message: errorMapper('id', 'required')
        });
    }

    next();
}

module.exports = {
    id_restaurante,
    id_prato,
    id_cliente,
    validateData,
    validateId,
}