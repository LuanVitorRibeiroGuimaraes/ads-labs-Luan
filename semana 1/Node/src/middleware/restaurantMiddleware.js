function nomeRestaurante(req, res, next) {
    const nomeRestaurante = req.body.nomeRestaurante;

    if(!nomeRestaurant) {
        return res.status(400).json({
            message: "O campo nomeRestaurante é obrigatório!"
        });
    }

    if(nomeRestaurant.length < 2) {
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
            message: "O campo contatoRestaurante deve ter entre 10 a 11 caracteres"
        });
    }

    next();
}

function validarNomePrato(req, res, next) {
    
}