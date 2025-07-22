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
            message: "O nome deve ser maior que 0"
        });
    }

    next();
}

function idade(req, res, next) {
    const idade = req.body.idade;
    
    if (!idade) {
        return res.status(400).json({
            message: errorMapper('idade', 'required')
        });
    }

    if(idade.length < 1) {
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
            message: errorMapper('cpf', 'required')
        });
    }

    const cpfLimpo = cpf.replace(/\D/g, '');

    if (cpfLimpo.length !== 11 || /^(\d)\1{10}$/.test(cpfLimpo)) {
        return res.status(400).json({
            message: errorMapper('cpf', 'invalid')
        });
    }

    let soma = 0;
    let resto;
    
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpfLimpo.charAt(9))) {
        return res.status(400).json({
            message: errorMapper('cpf', 'invalid')
        });
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpfLimpo.charAt(10))) {
        return res.status(400).json({
            message: errorMapper('cpf', 'invalid')
        });
    }

    req.cpfFormatado = cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    next();
}

// function numeroTelefone(req, res, next) {
//     const  numeroTelefone = req.body.numeroTelefone;
//     const regexNumeroTelefone = /^[0-9]+$/;

//     if (!numeroTelefone) {
//         return res.status(400).json({
//             message: errorMapper('required', 'numeroTelefone')
//         });
//     }

//     if(!regexNumeroTelefone.test(numeroTelefone)) {
//         return res.status(400).json({
//             message: "O telefone deve conter somente números!"
//         });
//     }

//     if (numeroTelefone.length < 11) {
//         return res.status(400).json({
//             message: "O numero de telefone deve conter 11 caracteres (dd + nono dígito + número)"
//         });
//     }

//     next();
// }

function email(req, res, next) {
    const email = req.body.email;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email) {
        return res.status(400).json({
            message: errorMapper('email', 'required')
        });
    }

    if(!regexEmail.test(email)) {
        return res.status(400).json({
            message: "O email informado é inválido."
        });
    }

    next();
}

function senha(req, res, next) {
    const senha = req.body.senha;

    if(!senha) {
        return res.status(400).json({
            message: errorMapper('senha', 'required')
        });
    }

    if(senha.length < 8) {
        return res.status(400).json({
            message: range('senha', 8, 16)
        });
    }

    next();
}

function validateData(req, res, next) {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const senha = req.body.senha;

    if(!nome) {
        return res.status(400).json({
            message: errorMapper('nome', 'required')
        });
    }

    if(!idade) {
        return res.status(400).json({
            message: errorMapper('idade', 'required')
        });
    }

    if(!cpf) {
        return res.status(400).json({
            message: errorMapper('cpf', 'required')
        });
    }

    if(!email) {
        return res.status(400).json({
            message: errorMapper('email', 'required')
        });
    }

    if(!senha) {
        return res.status(400).json({
            message: errorMapper('senha', 'required')
        });
    }

    next();
}

function validateDataWithoutSenha(req, res, next) {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const senha = req.body.senha;

    if(!nome) {
        return res.status(400).json({
            message: errorMapper('nome', 'required')
        });
    }

    if(!idade) {
        return res.status(400).json({
            message: errorMapper('idade', 'required')
        });
    }

    if(!cpf) {
        return res.status(400).json({
            message: errorMapper('cpf', 'required')
        });
    }

    if(!email) {
        return res.status(400).json({
            message: errorMapper('email', 'required')
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
    idade,
    cpf,
    senha,
    email,
    validateData,
    validateDataWithoutSenha,
    validateId,
    // numeroTelefone,
}
