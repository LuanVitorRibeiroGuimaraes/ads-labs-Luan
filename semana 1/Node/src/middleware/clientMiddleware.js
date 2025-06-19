    // ^ e $	delimitam o começo e o fim da string (garantem que src/models/client.jstudo será validado)
    // A-Za-z	letras sem acento
    // À-ÖØ-öø-ÿ	letras com acento (unicode de letras latinas acentuadas e ç)
    // \s	espaço
    // \-	hífen (precisa escapar com \)
    // +	pelo menos um caractere permitido

function validarNome(req, res, next) {
    const nome = req.body.nome;
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-]+$/;
    
    if (!nome) {
        return res.status(400).json({
            message: "O campo idade é obrigatório!"
        });
    }

    if (!nomeRegex.test(nome)) {
        return res.status(400).json({
            message: "Caracter invalido no nome!"
        });
    }

    if (nome.length < 0) {
        return res.status(400).json({
            message: "A idade deve ser maior que 0"
        });
    }

    next();
}

function validarIdade(req, res, next) {
    const data = req.body.idade;
    if (!data) {
        return res.status(400).json({
            message: "O campo idade é obrigatório"
        });
    }

    next();
}

function validarCPF(req, res, next) {
    const cpf = req.body.cpf;

    if (!cpf) {
        return res.status(400).json({
            message: "O campo CPF é obrigatorio"
        });
    }

    next();
}

function validarNumeroTelefone(req, res, next) {
    const  numeroTelefone = req.body.temNumber;
    const regexNumeroTelefone = /^[0-9]+$/;

    if (!numeroTelefone) {
        return res.status(400).json({
            message: "O campo numero telefone é obrigatório!"
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
    validarNome,
    validarIdade,
    validarCPF,
    validarNumeroTelefone,
}
