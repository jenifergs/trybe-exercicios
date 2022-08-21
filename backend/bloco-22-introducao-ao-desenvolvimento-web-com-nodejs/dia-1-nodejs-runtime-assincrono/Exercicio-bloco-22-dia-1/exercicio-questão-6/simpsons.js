const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent); // necessario para ler arquivos json
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function main() {
  await readAll();
  const simpson = await getSimpsonById(1);
//   const simpson2 = await getSimpsonById(15);
  console.log(simpson);
}

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

main();