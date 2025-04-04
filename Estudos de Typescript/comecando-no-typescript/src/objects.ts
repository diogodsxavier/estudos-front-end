// Type
// Para fazer Classes tem duas opções, a primeira é a forma tradicional e a segunda é a forma mais moderna
// que é utilizando o Type e a Interface.                 

type User = {
    firstname: string
    age: number
    email?: string  // ? = opcional
    password: string
    orders: Order[] // De outra Classe
    register(): string // Função
}

type Order = {
    userId: boolean
}

const user: User = {
    firstname: 'Diogo',
    age: 20,
    password: '123123',
    orders: [{ userId: true }],
    register() {
        return 'Registrado com sucesso!'
    }
}

const emailUser = (email?: string) => { };

emailUser(user.email)

// Unions

type Author = {
    books: string[]
}

const author: Author & User = {
    books: ['It: a coisa', '2001: uma odisséia no espaço'],
    firstname: 'Stephen King',
    age: 75,
    orders: [],
    password: 'abcabc',
    register() {
        return 'Registrado com sucesso!'
    }
}

// Interface

interface UserInterface {
    readonly firstname: string
    age: number
}

interface AuthorInterface {
    books: string[]
}

// Interface + Unions 
const newAuthor: AuthorInterface & UserInterface = {
    firstname: 'Kubric',
    age: 70,
    books: ['2001', 'O iluminado']
};