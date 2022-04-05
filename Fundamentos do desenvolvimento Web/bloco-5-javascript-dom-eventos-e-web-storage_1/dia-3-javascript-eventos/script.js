function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
// EXERCICIO - 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let diaDoMes of dezDaysList) {
    let li = document.createElement('li');
    li.innerText=diaDoMes;
    li.classList='day';
    if ( diaDoMes === 24 || diaDoMes === 25 || diaDoMes === 31) {
      li.classList.add('holiday');
    } 

    if (diaDoMes === 4 || diaDoMes ===11 || diaDoMes === 18 || diaDoMes === 25) {
      li.classList.add('friday')
    }
    document.querySelector('#days').appendChild(li);

  }
  
  // EXERCICIO - 2
  function diasFeriados (Feriados) {
    let botao = document.createElement('button');
    botao.innerText=Feriados;
    botao.id='btn-holiday';
    document.querySelector('.buttons-container').appendChild(botao);
  }
  diasFeriados ('Feriados');

  // EXERCICIO - 3 
function mudaCor (){
  document.querySelector('#btn-holiday').addEventListener('click', function (){
    let feriados = document.querySelectorAll('.holiday');
    for (let feriado of feriados) {
      feriado.style.backgroundColor='red'
    }
  })
}
mudaCor ('feriados')

// EXERCICIO - 4 =
function fridayButton (Sexta) {
  let botao2 = document.createElement('button');
  botao2.innerText='Sexta-feira';
  botao2.classList.add('btn-friday');
  document.querySelector('.buttons-container').appendChild(botao2);
}
fridayButton ('Sexta')

// EXERCICIO - 5 
function eventoSexta (){
  document.querySelector('.btn-friday').addEventListener('click', function (){
    let fridays = document.querySelectorAll('.friday');
    for (let i of fridays) {
      i.style.color='green';
    }
  })
}
eventoSexta ('fridays')

// EXERCICIO - 6
function zoom (evento) {
  evento.target.style.fontSize='23px'
}

function retiraZoom (evento2) {
  evento2.target.style.fontSize='20px'
}
let todosOsDias= document.querySelectorAll('.day');
for (let dia of todosOsDias) {
  dia.addEventListener('mouseover', zoom)
  dia.addEventListener('mouseout', retiraZoom)
}


// EXERCICIO - 7 
function tarefa (string) {
  let tarefaCozinhar= document.createElement('span');
  tarefaCozinhar.innerText=string;
  document.querySelector('.my-tasks').appendChild(tarefaCozinhar);
}
tarefa('Cozinhar')

// EXERCICIO - 8

function legenda (cor) {
  let divLegenda= document.createElement('div');
  divLegenda.classList='task';
  divLegenda.style.backgroundColor=cor;
  divLegenda.addEventListener('click', selecionaTarefa)
  document.querySelector('.my-tasks').appendChild(divLegenda);
}
 legenda('green')

 // EXERCICIO - 9 

 function selecionaTarefa (event){
  let divLegenda= event.target;
  let minhaClasseAtual = divLegenda.classList.toString();
  if ( minhaClasseAtual === 'task') {
    divLegenda.classList='task selected'
  } else {
    divLegenda.classList='task';
  }
 }



