const { SchemaValidationHelper } = require('../shared/SchemaHelperValidation')

function bairro(req, res, next) {
    const bairro = req.body.bairro
    
    if(!bairro) {
        return res.status(400).json({
            message: SchemaValidationHelper.errorMapper('bairro', 'required')
        });
    }

    if(bairro.length < 3) {
        return res.status(400).json({
            message: SchemaValidationHelper.tamanhoMin('bairro', 3)
        });
    }

    next();
}

function rua(req, res, next) {
    const rua = req.body.rua

    if(!rua) {
        return res.status(400).json({
            message: SchemaValidationHelper.errorMapper('rua', 'required')
        });
    }

    if(rua.length < 3) {
        return res.status(400).json({
            message: SchemaValidationHelper.tamanhoMin('rua', 3)
        });
    }

    next();
}

function numero(req, res, next) {
    const numero = req.body.numero

    if(!numero) {
        return res.status(400).json({
            message: SchemaValidationHelper.errorMapper('numero', 'required')
        });
    }

    if(numero.length < 1) {
        return res.status(400).json({
            message: SchemaValidationHelper.tamanhoMin('numero', 1)
        })
    }
}

module.exports = {
    bairro,
    rua,
    numero,
}