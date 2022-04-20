// com erro <pending>
// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();

// função abaixo roda corretamente
// const fetch = require('node-fetch');

// const fetchJoke = () => { // A função fetchJoke chama o fetch que é executado e após sua execução
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json()) // retorna para o parâmetro da função do primeiro .then() uma resposta e na sua execução iremos pegar a versão JSON dessa resposta por meio da função .json() . 
//     .then((data) => console.log(data.value));
// }

// fetchJoke();

// função da erro, note que para forçar o erro retiramos o https:// do início da url.

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`)); // o .catch() recebe o erro gerado caso a requisição não seja bem sucedida, O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele
// }

// fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported

// resolvendo erro com async e await 
// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);
  
//   console.log(result);
// };

// fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

// refartorado com try catch 
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.