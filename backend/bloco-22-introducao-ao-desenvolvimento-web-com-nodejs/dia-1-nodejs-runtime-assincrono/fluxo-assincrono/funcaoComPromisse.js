function calcularDivisao(num1, num2){
    const promisse = new Promise((resolve, reject) => {
        if(num2 === 0) {
            reject(new Error('Não é possível dividir por zero!'));
        const resultado = num1 / num2;
        resolve(resultado);
        }
    });
    return promisse;
}

calcularDivisao(10, 0)
    .then(resultado => console.log(resultado))
    .catch(erro => console.log(erro.message));