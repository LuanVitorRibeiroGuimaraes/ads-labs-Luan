function errorMapper(field, error) {
    let errors = {
        'required': `O campo ${field} deve não pode ser vazio.`,
        'invalid': `O campo ${field} deve conter um valor válido.`,
        'invalidChar': `O campo ${field} apresenta caracteres inválidos`,
    }

    return errors[error]
}

function tamanhoMin(field, n) {
    return `O campo ${field} deve conter no mínimo ${n} caracteres.`
}

function tamanhoMax(field, n) {
    return `O campo ${field} deve conter no máximo ${n} caracteres.`
}

function range(field, n, m) {
    return `O campo ${field} deve conter entre ${n} e no máximo ${m} caracteres.`
}

module.exports = {
    errorMapper,
    tamanhoMin,
    tamanhoMax,
    range,
}