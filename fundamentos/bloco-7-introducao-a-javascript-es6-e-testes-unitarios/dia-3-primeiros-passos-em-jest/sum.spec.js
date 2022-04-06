const soma = require ('./sum.js')

describe('testes da função sum', () => {
    it('verifica se a soma de 4 + 5 = 9', () => {
        expect(soma(4,5)).toBe(9);
    })
    it('Verifica se a soma de 0 + 0 = 0', () => {
        expect(soma(0,0)).toBe(0);
    })
    it('Verifica se existe erro quando valor é string', () => {
        expect( () => {
            soma(4, '5')
        }).toThrow(soma.message); 
    })
    it('Verifica se mensagem de erro é: parameters must be numbers', () => {
        expect(() => {soma()}).toThrowError(new Error('parameters must be numbers'))
    })
})