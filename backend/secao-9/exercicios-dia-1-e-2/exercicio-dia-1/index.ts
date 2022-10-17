import Students from './Students';
import Person from './Person';
import Subject from './Subject';
import Teacher from './Teacher';

// const student1 = new Students("Rafael", 100) 

// student1.provas = [] 
// // student1.traba.prettierrclhos = [3,4]

// console.log(student1.mediaDasNotas());
// console.log(student1.somaDasNotas());x   

const novo = new Students('jeje', new Date('2000-11-17'));
console.log(novo);

const eu1 = new Students('Rafael', new Date('2000-11-29'));
console.log(eu1);
console.log(eu1.matricula);

const historia = new Subject('História');
console.log(historia);
const matematica = new Subject('Matemática');
console.log(matematica);
const portugues = new Subject('Português');
console.log(portugues);


const prof3 = new Teacher('luluzinha', new Date('1990-11-29'), 2000, portugues);
console.log(prof3);

const est1 = new Students('Rafael', new Date('2000-11-29'));

console.log(est1);



