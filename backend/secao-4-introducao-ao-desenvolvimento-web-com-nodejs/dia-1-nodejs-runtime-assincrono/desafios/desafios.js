// crie uma função que receba um array de numeros
// e retorne um array ordenado de forma crescente
function sort(array) {
  return array.sort((a, b) => a - b);
};

console.log(sort([3, 5, 1, 9, 4, 2, 7]));


function ordenacaoSimples(array) {
    const copia = [...array] // cria um array de copia para nao modificar o original
    const novoArray = [] // cria um novo array vazio para receber os valores ordenados
    
    while (novoArray.length < array.length) {
    // pegar o menor item do array
    // eslint-disable-next-line unicorn/no-array-reduce
    const menorItem = copia.reduce((menor, item) => {
    return menor < item ? menor : item
    })
    
    // se fosse o maior item seria:
    // const maiorItem = copia.reduce((maior, item) => {
    // return maior > item ? maior : item
    // })
    
    // adicionar o menor item ao novo array
    novoArray.push(menorItem)
    
    // remover o menor item do array
    copia.splice(copia.indexOf(menorItem), 1)
    }
    
    return novoArray
    }
// 
    console.log(ordenacaoSimples([3, 5, 1, 9, 4, 2, 7]));