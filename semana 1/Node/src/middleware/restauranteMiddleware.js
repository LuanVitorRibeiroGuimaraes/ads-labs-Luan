const { SchemaHelperValidation } = require('../shared/SchemaValidationHelper');

function nomeRestaurante(req, res, next) {
    const nomeRestaurante = req.body.nomeRestaurante;

    if(!nomeRestaurante) {
        return res.status(400).json({
            message: SchemaHelperValidation.errorMapper('nomeRestaurante', 'required')
        });
    }

    if(nomeRestaurante.length < 2) {
        return res.status(400).json({
            message: SchemaHelperValidation.range('nomeRestaurante', 2, 40)
        });
    }

    next();
}

function contatoRestaurante(req, res, next) {
    const contatoRestaurante = req.body.contatoRestaurante;
    const regexNumeroTelefone = /^[0-9]+$/;

    if(!contatoRestaurante) {
        return res.status(400).json({
            message: SchemaHelperValidation.errorMapper('contatoRestaurante', 'required')
        });
    }

    if(!regexNumeroTelefone.test(contatoRestaurante)) {
        return res.status(400).json({
            messae: "Digite somente números!"
        });
    }

    if(contatoRestaurante.length < 10 || contatoRestaurante.length > 11) {
        return res.status(400).json({
            message: SchemaHelperValidation.range('contatoRestaurante', 10, 11)
        });
    }

    next();
}

function nomePrato(req, res, next) {
    const nomePrato = req.body.nomePrato

    if(!nomePrato) {
        return res.status(400).json({
            message: SchemaHelperValidation.errorMapper('nomePrato', 'required')
        });
    }

    if(nomePrato.length < 4 || nomePrato.length > 30) {
        return res.status(400).json({
            message: SchemaHelperValidation.range('nomePrato', 4, 30)
        });
    }
    
    next();
}

module.exports = {
    nomeRestaurante,
    contatoRestaurante,
    nomePrato,
}
