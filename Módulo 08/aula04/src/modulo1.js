export const nome = 'Diogo';
export const sobrenome = 'Daniel';
export const idade = 19;
// Podemos exportar direto daqui

export function soma(x, y) {
    return x + y;    
}

export default class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export default (x, y) => x * y;

// export { nome, sobrenome, idade, soma };
// O 'as' funciona para exportar ou importar com nomes diferentes.