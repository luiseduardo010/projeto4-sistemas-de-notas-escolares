const { calcularMedia, verificaAprovacao, adicionarNota } = require('../src/notas');

describe('Função calcularMedia', () => {
    test('Deve calcular corretamente a média de [8, 9, 10]', () => {
        expect(calcularMedia([8, 9, 10])).toBe(9);
    });
});

describe('Função verificaAprovacao', () => {
    test('Deve retornar "Aprovado" para médias iguais ou maiores que 6', () => {
        expect(verificaAprovacao(8,5)).toBe('Aprovado');
    });
});

describe('Função adicionarNota', () => {
    test('Deve adicionar corretamente uma nova nota ao array', () => {
        expect(adicionarNota([6, 7], 9)).toEqual([6, 7, 9]);
    });
});
