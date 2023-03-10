const { generate } = require('gerador-validador-cpf')

const cpfName = () => {
    var cpf = generate({format: true})
    var cpfAndName = cpf + ' - Edvaldo Silva'
    return cpfAndName
}

const soma = (num1, num2) => {
    var soma = num1+num2
    return soma
}

exports.cpfName = cpfName
exports.soma = soma