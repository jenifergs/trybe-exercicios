// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:


// const n1 = 7;
// const n2 = 9;

// console.log( n1 + n2);
// console.log(n1 - 9);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(n1 % n2);

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// const numeroUm = 25
// const numeroDois = 1025;
// let numeroMaior;
// if (numeroUm > numeroDois) {
//     numeroMaior= numeroUm;
// } 
// else {
//     numeroMaior=numeroDois 
// }
//     console.log(numeroMaior);

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
// const valor1 = 65;
// const valor2 = 354;
// const valor3 = 44;
// let valorMaior;

// if ( valor1 > valor2 && valor1 > valor3) {
//     valorMaior=valor1;
// } else if ( valor2 > valor1 && valor2 > valor3) {
//     valorMaior= valor2;
// }
// else {
//     valorMaior=valor3;
// }

// console.log(valorMaior);


// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
// let numero= 0;
// if(numero > 0) {
//     console.log("positive");
// } else if (numero < 0) {
//     console.log("negative" );
// } else {
//     console.log("zero");
// }

// console.log(numero);

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// const anguloUm= -60;
// const anguloDois= 60;
// const anguloTres= 60;
// if ( anguloUm < 0|| anguloDois < 0|| anguloTres < 0) {
//     console.log("Este angulo é inválido");
// }
// if (anguloUm + anguloDois + anguloTres === 180) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// let peca="Rei";
// let pecaModificada= peca.toLowerCase();
// switch (pecaModificada) {
//     case "bispo": 
//         console.log("diagonal");
//         break;
//     case "cavalo":
//         console.log("em L");
//         break;
//     case "torre":
//         console.log("em cruz");
//         break;

//     default: 
//         console.log("peça invalida");
//         break;
// }

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// let nota= -60;
// if (nota > 100 || nota < 0) {
//     console.log("Erro");
// }
//     else if (nota >= 90) {
//         console.log("A");
//     } else if (nota >= 80) {
//         console.log("B");
//     } else if (nota >= 70) {
//         console.log("C");
//     } else if (nota >= 60) {
//         console.log("D");
//     } else if (nota >= 50 ) {
//         console.log("E");
//     } else {
//         console.log("F");
//     }

// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// const n1 = 7;
// const n2 = 6;
// const n3 = 3;

// if (n1 % 2 ===0 || n2 % 2 ===0 || n3 % 2 ===0 ){
//     console.log(true);
// } else {
//     console.log(false);
// }

// 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// const n1 = 74;
// const n2 = 65;
// const n3 = 32;
// if (n1 % 2 ===1 || n2 % 2 ===1 || n3 % 2 ===1 ){
//     console.log(true);
// } else {
//     console.log(false);
// }

// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// const custo=7000.00
// const venda=8000.00
// if (venda < 0  || custo < 0){
//     console.log("Erro: Valor de custo ou venda zerado");
// } else { 
// const imposto= 20/100;
// const impostoSobreCusto = custo * imposto;
// const custoTotal= custo + impostoSobreCusto;
// const lucroTotal= venda - custoTotal;


// console.log(lucroTotal * 1000);
// }




