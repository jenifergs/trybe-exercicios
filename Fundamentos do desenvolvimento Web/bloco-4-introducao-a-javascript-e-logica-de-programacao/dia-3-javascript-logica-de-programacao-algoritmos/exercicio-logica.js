// O fatorial é representado pelo sinal !

// let fatorial11 = 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;

// console.log(fatorial11); 

// let word = 'tryber';

// console.log(word.split('').reverse(''));


let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior = array[0];  //defiinindo maior e menor palavra menor
let palavraMenor = array[0];

for (let i = 1; i < array.length; i += 1) { //percorre ol array 
    let palavraAtual = array[i];
    if (palavraAtual.length > palavraMaior.length) {  //lenght em string conta caracteres
        palavraMaior = palavraAtual;
    }
    if (palavraAtual.length < palavraMenor.length) {
        palavraMenor = palavraAtual;
    }
    
}

console.log("Palavra maior: ",  palavraMaior, "Palavra menor: ", palavraMenor);


