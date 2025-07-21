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

function prato_id(req, res, next) {
    const {prato_id} = req.body;

    if(!prato_id) {
        return res.status(400).json({
            message: errorMapper('prato_id', 'required')
        });
    }

    next();
}

function cliente_id(req, res, next) {
    const {cliente_id} = req.body;

    if(!cliente_id) {
        return res.status(400).json({
            message: errorMapper('cliente_id', 'required')
        });
    }

    next();
}

function validateData(req, res, next) {
    const { id_restaurante } = req.body;
    const { prato_id } = req.body;
    const { cliente_id } = req.body;

    if(!id_restaurante) {
        return res.status(400).json({
            message: errorMapper('id_restaurante', 'required')
        });
    }

    if(!prato_id) {
        return res.status(400).json({
            message: errorMapper('prato_id', 'required')
        });
    }

    if(!cliente_id) {
        return res.status(400).json({
            message: errorMapper('cliente_id', 'required')
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
    prato_id,
    cliente_id,
    validateData,
    validateId,
}