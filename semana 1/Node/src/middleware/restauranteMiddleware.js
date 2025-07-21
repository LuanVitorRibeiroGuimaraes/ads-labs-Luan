const { errorMapper, range } = require('../shared/SchemaValidationHelper');

function nomeRestaurante(req, res, next) {
    const nomeRestaurante = req.body.nomeRestaurante;

    if(!nomeRestaurante) {
        return res.status(400).json({
            message: errorMapper('nomeRestaurante', 'required')
        });
    }

    if(nomeRestaurante.length < 2) {
        return res.status(400).json({
            message: range('nomeRestaurante', 2, 40)
        });
    }

    next();
}

function contatoRestaurante(req, res, next) {
    const contatoRestaurante = req.body.contatoRestaurante;
    const regexNumeroTelefone = /^[0-9]+$/;

    if(!contatoRestaurante) {
        return res.status(400).json({
            message: errorMapper('contatoRestaurante', 'required')
        });
    }

    if(!regexNumeroTelefone.test(contatoRestaurante)) {
        return res.status(400).json({
            message: "Digite somente números!"
        });
    }

    if(contatoRestaurante.length < 10 || contatoRestaurante.length > 11) {
        return res.status(400).json({
            message: range('contatoRestaurante', 10, 11)
        });
    }

    next();
}

function validateData(req, res, next) {
    const nomeRestaurante = req.body.nomeRestaurante;
    const contatoRestaurante = req.body.nomeRestaurante;

    if(!nomeRestaurante) {
        return res.status(400).json({
            message: errorMapper('nomeRestaurante', 'required')
        });
    }

    if(!contatoRestaurante) {
        return res.status(400).json({
            message: errorMapper('contatoRestaurante', 'required')
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
    nomeRestaurante,
    contatoRestaurante,
    validateData,
    validateId,
}
