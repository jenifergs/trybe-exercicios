const acordando = () => {
    return 'Acordando!!'
}

const tomarCafe = () => {
    return 'Bora tomar café!!'
}

const dormir = () => {
    return 'Partiu dormir!!'
}


const doingThings = (funcao) => {
    funcao().toUpperCase();
}

// Ao chamar a função doingThings:
doingThings(acordando);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

