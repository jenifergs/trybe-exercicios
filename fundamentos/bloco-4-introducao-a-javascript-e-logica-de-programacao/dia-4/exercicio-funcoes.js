



//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function array1 (array){
    let maiorValor=array[0]; //meu maior valor é o elemento do meu array no indice zero. 
    let maiorIndice=0;  // declarando que meu indice é 0
    for(let indice=0; indice<array.length; indice +=1){ // para o meu indice que começa em 0, enquanto meun indice for menor que o tamanho de meu array, meu indice anda uma casa. (incrementa valor +1)
        if (maiorValor < array[indice] ){ //se o maior valor for menor que o valor do elemento do array no indice atual 
            maiorValor=array[indice]; // então o maior valor se torna o valor do elemento do array no indice atual 
            maiorIndice=indice; // maior indice é o indice na posição atual 
        }
    }
    return maiorIndice;  //se eu quisesse o return do maior valor, eu dava. 
}     

console.log(array1([2, 3, 6, 7, 10, 1]));


//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function arrayIndiceMenorValor (array){
    let menorValor=array[0];
    let menorIndice=0;
    for (let i=0; i < array.length; i +=1) {
        if (menorValor > array[i]) {
            menorValor=array[i];
            menorIndice=i;
        }
    }
    return menorIndice; //o return é fora do for pois o return só pode ser executado quando acabar o laço. 
}

console.log(arrayIndiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function palavraMaiorNoarray  (array) {
    let palavraMaior=array[0];
    for (let i=0; i < array.length; i +=1) {
         let palavraAgora=array[i];
        if (palavraMaior.length < palavraAgora.length) {
            palavraMaior=palavraAgora;
        }
    }
    return palavraMaior  
}

console.log( palavraMaiorNoarray (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));