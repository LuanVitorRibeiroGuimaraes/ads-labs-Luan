const { errorMapper } = require('../shared/SchemaValidationHelper');
const { range } = require('../shared/SchemaValidationHelper');

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

function role(req, res, next) {
    const role = req.body.role;

    if(!role) {
        return res.status(400).json({
            message: errorMapper('role', 'required')
        });
    }

    if(role != 'admin' || role != 'gerente') {
        return res.status(400).json({
            message: 'O campo role deve ser "admin" ou "gerente" respectivamente'
        });
    }

    next();
}

function validateData(req, res, next) {
    const email = req.body.email;
    const senha = req.body.senha;
    const role = req.body.role;

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

    if(!role) {
        return res.status(400).json({
            message: errorMapper('role', 'required')
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
    email,
    senha,
    role,
    validateData,
    validateId,
}
