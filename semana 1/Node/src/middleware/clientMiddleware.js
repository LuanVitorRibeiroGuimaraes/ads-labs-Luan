function validarNome(nome) {
    const nomeLimpo = nome.trim()
    return nomeLimpo.length >= 5
}

// function validarCpf(cpf) {
//     if (cpf.length < 13) return null

//     let cpfAtigo = cpf

//     const limparCpf = cpfAtigo.replace(/[.\-]/g, '')

//     let penultimoDigitoCpf = parseInt(limparCpf[9], 10);
//     let ultimoDigitoCpf = parseInt(limparCpf[10], 10);

//     let novoCpfInt = []

//     for (let i = 0; i < cpf.length; i ++) {
//         if (cpf[i] != '.' && cpf[i] != '-') {
//             novoCpfInt.push(parseInt(cpf[i]))
//         }
//     }

//     let cont = 10
//     let primeiroDigitoFinal = 0

//     for (let i = 0; i < 9; i++) {
//         primeiroDigitoFinal += (novoCpfInt[i] * cont)
//         cont --
//     }

//     let penultimoDigitoValido = (firstDigit * 10) % 11
//     (penultimoDigitoValido == 10) ? penultimoDigitoValido == 0 : penultimoDigitoValido = penultimoDigitoValido

//     cont = 11
//     let segundoDigitoFinal = 0

//     for (let i = 0; i < 9; i++) {
//         segundoDigitoFinal += (newCpfInt[i] * cont)
//         cont --
//     }

//     ultimoDigitoCpfValido += (penultimoDigitoCpf * 2)
//     ultimoDigitoCpfValido *= (10) % 11

//     return (penultimoDigitoValido == penultimoDigitoCpf && ultimoDigitoCpfValido == ultimoDigitoCpf) ? 1 : 0

    
// }

function validarEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    
    return emailRegex.test(email)
}

function validarIdade(age) {
    return age.length >= 1
}

function validarTelefone(telNumber) {
    return telNumber.length == 13
}

function validateUserMiddleware(req, res, next) {
    // Pega os campos email e senha do objeto req.body e me dá variáveis com esses nomes
    const { name, age, cpf, email, telNumber } = req.body

    return (validarNome(name) && 
    validarIdade(age) &&
    validarCPF(cpf) && 
    validarEmail(email) && 
    validarTelefone(telNumber))
    ? 1 : 0
}

module.exports = {
    validarNome,
    validarCPF,
    validarEmail,
    validarIdade,
    validarTelefone,
}