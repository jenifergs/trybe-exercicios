const fs = require('fs').promises;
// 1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent); // necessario para ler arquivos json
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function main() {
//   await readAll();
//   const simpson = await getSimpsonById(1);
//   const simpson2 = await getSimpsonById(15);
//   console.log(simpson);

  // filterSimpsons();
  // createSimpsonsFamily();
  // addNelsonToFamily();
  replaceNelson();
}
// 2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
async function getSimpsonById(id) {
    const fileContent = await fs
      .readFile('./simpsons.json', 'utf-8');
    
    const simpsons = JSON.parse(fileContent);
    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

     if (!chosenSimpson) {
       throw new Error('id não encontrado');
     }
     return chosenSimpson;
  }

// 3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}
// 4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4
async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

// 5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

// 6 - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json
async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim: 
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}
main();