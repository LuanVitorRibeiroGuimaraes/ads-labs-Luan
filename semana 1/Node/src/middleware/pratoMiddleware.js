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

    if (nome.length < 0) {
        return res.status(400).json({
            message: "A idade deve ser maior que 0"
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

    if (valor < 0) {
        return res.status(400).json({ //
            message: "O valor do prato não pode ser menor que 1"
        });
    }
}

module.exports = {
    nome, 
    valor,
}