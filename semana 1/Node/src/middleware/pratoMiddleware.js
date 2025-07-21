const { errorMapper } = require('../shared/SchemaValidationHelper');

function nome(req, res, next) {
    const nome = req.body.nome;
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-]+$/;

    if (!nome) {
        return res.status(400).json({ //
            message: errorMapper('nome', 'required')
        });
    }

    if (!nomeRegex.test(nome)) {
        return res.status(400).json({
            message: errorMapper('nome', 'invalidChar')
        });
    }

    if (nome.length < 3) {
        return res.status(400).json({
            message: "O nome deve ser maior que 3"
        });
    }

    next();
}

function valor(req, res, next) {
    const valor = req.body.valor;

    if (!valor) {
        return res.status(400).json({
            message: errorMapper('valor', 'required')
        });
    }

    if (valor < 1) {
        return res.status(400).json({
            message: "O valor do prato não pode ser menor que 1"
        });
    }

    next();
}

function validateData(req, res, next) {
    const nome = req.body.nome;
    const valor = req.body.valor;

    if(!nome) {
        return res.status(400).json({
            message: errorMapper('nome', 'required')
        });
    }

    if(!valor) {
        return res.status(400).json({
            message: errorMapper('valor', 'required')
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
    nome, 
    valor,
    validateData,
    validateId,
}