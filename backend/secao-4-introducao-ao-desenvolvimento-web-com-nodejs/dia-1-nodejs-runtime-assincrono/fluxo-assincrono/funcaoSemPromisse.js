function calcularDivisao(num1, num2) {
if(num2 === 0) {
    throw new Error('Não é possível dividir por zero!');
}

const resultado = num1 / num2;

return resultado;
}
try {
    const resultado = calcularDivisao(10, 0);
    console.log(resultado);
} catch(erro) {
    console.log(erro);
};