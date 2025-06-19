function nomeRestaurante(req, res, next) {
    const nomeRestaurante = req.body.nomeRestaurante;

    if(!nomeRestaurante) {
        return res.status(400).json({
            message: "O campo nomeRestaurante é obrigatório!"
        });
    }

    if(nomeRestaurante.length < 2) {
        return res.status(400).json({
            message: "O nome do restaurante deve ter entre 3 a 50 caracteres!"
        });
    }

    next()
}

function contatoRestaurante(req, res, next) {
    const contatoRestaurante = req.body.contatoRestaurante;
    const regexNumeroTelefone = /^[0-9]+$/;

    if(!contatoRestaurante) {
        return res.status(400).json({
            message: "O campo contatoRestaurante é obrigatório!"
        });
    }

    if(!regexNumeroTelefone.test(contatoRestaurante)) {
        return res.status(400).json({
            messae: "Digite somente números!"
        });
    }

    if(contatoRestaurante.length < 10 || contatoRestaurante.length > 11) {
        return res.status(400).json({
            message: "O campo contatoRestaurante deve ter entre 10 a 11 caracteres!"
        });
    }

    next();
}

function nomePrato(req, res, next) {
    const nomePrato = req.body.nomePrato

    if(!nomePrato) {
        return res.status(400).json({
            message: "O campo nomePrato é obrigatório"
        })
    }

    if(nomePrato.length < 4 || nomePrato.length > 30) {
        return res.status(400).json({
            message: "O campo nomePrato deve ter entre 4 a 30 caracteres!"
        })
    }
    
    next()
}

function enderecoRestaurante(req, res, next) {
    const { rua, bairro, numero }  = req.body
}

module.exports = {
    nomeRestaurante,
    contatoRestaurante,
    nomePrato,
    enderecoRestaurante,
}
