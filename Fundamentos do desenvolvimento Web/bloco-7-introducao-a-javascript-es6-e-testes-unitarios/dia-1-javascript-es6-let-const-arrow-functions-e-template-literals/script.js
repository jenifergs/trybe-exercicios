//parte 1 QUESTÃO 1
const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo ! `;
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}
testingScope(true);
// QUESTÃO 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}
const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

//PARTE 2
//QUESTÃO 1 Na matemática, o fatorial de um número natural n, representado por n!, é o produto de todos os inteiros positivos menores ou iguais a n.

const factorial = number => {
    let result = 1;
    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }
    return result;
}
console.log(factorial(5));

//QUESTAO 2

const longestWord = text => { //arrow function
    let wordArray = text.split(' '); // cria um novo array onde cada palavra é uma string 
    let maxLength = 0;
    let result = '';
    for (const word of wordArray) { // percorre o array 
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


// QUESTÃO 4 REVISAR E REFAZER 
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase(paramOne) {
    const fun1 = paramInner => (
        `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
        result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));