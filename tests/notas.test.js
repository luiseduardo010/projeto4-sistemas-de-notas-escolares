const { calcularMedia, verificaAprovacao, adicionarNota } = require('../src/notas');

describe('Função calcularMedia', () => {
    test('Deve calcular corretamente a média de [8, 9, 10]', () => {
        expect(calcularMedia([8, 9, 10])).toBe(9);
    });

    test('Deve lançar um erro ao receber uma lista vazia', () => {
        expect(() => calcularMedia([])).toThrow('Lista de notas vazia');
    });
});

describe('Função verificaAprovacao', () => {
    test('Deve retornar "Aprovado" para médias iguais ou maiores que 6', () => {
        expect(verificaAprovacao(8,5)).toBe('Aprovado');
        expect(verificaAprovacao(9)).toBe('Aprovado');
    });

    test('Deve retornar "Reprovado" para médias menores que 6', () => {
        expect(verificaAprovacao(4,5)).toBe('Reprovado');
        expect(verificaAprovacao(5)).toBe('Reprovado');
    });
});

describe('Função adicionarNota', () => {
    test('Deve adicionar corretamente uma nova nota ao array', () => {
        expect(adicionarNota([6, 7], 9)).toEqual([6, 7, 9]);
    });

    test('Deve lançar um erro ao adicionar uma nota inválida (menor que 0 ou maior que 10)', () => {
        expect(() => adicionarNota([6, 7], -1)).toThrow('Nota inválida');
        expect(() => adicionarNota([5, 7], 11)).toThrow('Nota inválida');
    });
});
