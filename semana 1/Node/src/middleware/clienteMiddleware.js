const { SchemaValidationHelper } = require('../shared/SchemaHelperValidation')

function nome(req, res, next) {
    const nome = req.body.nome;
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-]+$/;
    
    if (!nome) {
        return res.status(400).json({
            message: SchemaValidationHelper.errorMapper('nome', 'required')
        });
    }

    if (!nomeRegex.test(nome)) {
        return res.status(400).json({
            message: SchemaValidationHelper.errorMapper('nome', 'invalidChar')
        });
    }

    if (nome.length < 0) {
        return res.status(400).json({
            message: "A idade deve ser maior que 0"
        });
    }

    next();
}

function idade(req, res, next) {
    const idade = req.body.idade;
    
    if (!idade) {
        return res.status(400).json({
            message: SchemaValidationHelper.errorMapper('idade', 'required')
        });
    }

    if(idade) {
        return res.status(400).json({
            message: "A idade deve ser maior 0."
        })
    }

    next();
}

function cpf(req, res, next) {
    const cpf = req.body.cpf;

    if (!cpf) {
        return res.status(400).json({
            message: SchemaValidationHelper.errorMapper('cpf', 'required')
        });
    }

    next();
}

function numeroTelefone(req, res, next) {
    const  numeroTelefone = req.body.temNumber;
    const regexNumeroTelefone = /^[0-9]+$/;

    if (!numeroTelefone) {
        return res.status(400).json({
            message: SchemaValidationHelper.errorMapper('required', 'numeroTelefone')
        });
    }

    if(!regexNumeroTelefone.test(numeroTelefone)) {
        return res.status(400).json({
            message: "O telefone deve conter somente números!"
        });
    }

    if (numeroTelefone.length != 11) {
        return res.status(400).json({
            message: "O numero de telefone deve conter 11 caracteres (dd + nono dígito + número)"
        });
    }

    next();
}

module.exports = {
    nome,
    idade,
    cpf,
    numeroTelefone,
}
