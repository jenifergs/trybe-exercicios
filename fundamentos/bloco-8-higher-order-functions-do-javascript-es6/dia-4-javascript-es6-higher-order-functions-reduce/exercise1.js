// 1 - Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = arrays.reduce((acc, elemento) => {
    acc.push(...elemento)
    return acc;
  },[]);

//   console.log(flatten);

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
const resultado = books.reduce((acc, book, index, array) => {
   if(index === array.length - 1){
    return `${acc} ${book.author.name}.`;
   } 
   return `${acc} ${book.author.name},`;
},''); 

// console.log(resultado);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const media = books.reduce((acc, book, index, array) => {

}, 0);

// 4 - Encontre o livro com o maior nome.

const maiorNome = books.reduce((acc, book) => {
    if (acc.name.length < book.name.length){
        return book;
    } return acc;
});

// console.log(maiorNome);

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const contemA = names.reduce((acc, nome, index, array) => {
    if (nome.length === 'a' || nome.length === 'A') {
        acc += 1;
        return acc;
    }
  });   //REFAZER QUESTÃO E ENCONTRAR O ERRO;

  console.log(contemA);

  //RESPONDER QUESTÃO 6