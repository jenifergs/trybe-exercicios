let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }




// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let soma = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     soma += numbers[i]; //acumula em soma o seu valor anterior mais o valor de numbers[i]
// }
// console.log(soma); //log fora da o resultado de todos os indices // log dentro do for da o resultado de indice por indice 





// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let media = 0;
// let numeroDeElementos = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     numeroDeElementos += 1; //a cada loop conta mais um elemento dentro do array 
// }
// media = soma / numeroDeElementos;
// console.log(media);






// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
//     if (media > 20) {
//         console.log("valor maior que 20");
//     } else {
//         console.log("valor menor ou igual a 20");
//     }


// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let maiorValor = 0;
// maiorValor = numbers[0];
// for (let i = 1; i < numbers.length; i += 1) {
//     if (maiorValor < numbers[i]) {
//         maiorValor = numbers[i];
//     }
// }
// console.log(maiorValor);




// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let contadorImpares = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     let elemento = numbers[i]; // elemento ganha valor do valor do elemento array na posição do indice
//     if (elemento % 2 === 1) { //se o resto da divisão do elemento por 2 for 1 significa que é impar, 0 é par
//         contadorImpares += 1; // 
//     }
// }

// if (contadorImpares === 0) {
//     console.log("nenhum valor ímpar encontrado");
// } else {
//     console.log(contadorImpares);
// }



// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let menorValor = 0;
// menorValor = numbers[0]
// for (let i = 1; i < numbers.length; i += 1) {
//     if (menorValor > numbers[i]) {
//         menorValor = numbers[i];
//     }
// }
// console.log(menorValor);




// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// let novoArray = [];
// for (let i = 1; i <= 25; i += 1) {
//     novoArray.push(i)
// }
// console.log(novoArray);



// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// let divisao;
// for (let i = 0; i < novoArray.length; i += 1) {
//     divisao = novoArray[i]
//     console.log(divisao / 2);
// }