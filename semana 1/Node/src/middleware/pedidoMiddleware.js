const { errorMapper } = require('../shared/SchemaValidationHelper');

async function id_restaurante(req, res, next) {
    const {id_restaurante} = req.body;

    if(!id_restaurante) {
        throw new Error(errorMapper('id_restaurante', 'required'));
    }

    next();
}

async function prato_id(req, res, next) {
    const {prato_id} = req.body;

    if(!prato_id) {
        throw new Error(errorMapper('prato_id', 'required'));
    }

    next();
}

async function cliente_id(req, res, next) {
    const {id_restaurante} = req.body;

    if(!cliente_id) {
        throw new Error(errorMapper('cliente_id', 'required'));
    }

    next();
}

module.exports = {
    id_restaurante,
    prato_id,
    cliente_id,
}