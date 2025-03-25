"use strict";
// Type
// Para fazer Classes tem duas opções, a primeira é a forma tradicional e a segunda é a forma mais moderna
// que é utilizando o Type e a Interface.                 
const user = {
    firstname: 'Diogo',
    age: 20,
    password: '123123',
    orders: [{ userId: true }],
    register() {
        return 'Registrado com sucesso!';
    }
};
const emailUser = (email) => { };
emailUser(user.email);
const author = {
    books: ['It: a coisa', '2001: uma odisséia no espaço'],
    firstname: 'Stephen King',
    age: 75,
    orders: [],
    password: 'abcabc',
    register() {
        return 'Registrado com sucesso!';
    }
};
// Interface + Unions 
const newAuthor = {
    firstname: 'Kubric',
    age: 70,
    books: ['2001', 'O iluminado']
};
