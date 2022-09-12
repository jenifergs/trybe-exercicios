const operacoes = require('./operacoes');
const readline = require('readline-sync');
console.log('calculadora simples');
const num1 = readline.questionInt('Digite o primeiro número: ');
const oper = readline.question('Digite a operação: ');
const num2 = readline.questionInt('Digite o segundo número: ');

// 
switch(oper) {
    case('+'):
        operacoes.sum(num1, num2);
        break;
    case('-'):
        operacoes.sub(num1, num2);
        break;
    case('*'):
        operacoes.mul(num1, num2);
        break;
    case('/'):
        operacoes.div(num1, num2);
        break;
    default:
        console.log('Operação inválida!');
};

