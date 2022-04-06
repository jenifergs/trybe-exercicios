const funcaoFizz = require('./fizz');

describe('testes da função fizz', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(funcaoFizz(15)).toBe('fizzbuzz');
    })
    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(funcaoFizz(3)).toBe('fizz');
    });
    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(funcaoFizz(5)).toBe('buzz')
    })
    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(funcaoFizz(8)).toBe(8);
    })
    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(funcaoFizz('ola')).toBe(false);
    })
})