let firstNumber = prompt ('Digite o 1º número')
let secondNumber = prompt ('Digite o 2º número')

firstNumber = Number (firstNumber)
secondNumber = Number (secondNumber)

const sum = firstNumber+ secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert ('Soma: ' + sum)
alert ('Subtração: ' + sub)
alert ('Multiplicação: ' + multi)
alert ('Divisão: ' + div)
alert ('Resto da divisão: ' + restDiv)