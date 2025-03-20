// Type

type User = {
    firstname: string
    age: number
    email?: string
    password: string
    orders: Order[]
}

type Order = {
    userId: boolean
}

const user: User = {
    firstname: 'Diogo',
    age: 20,
    password: '123123',
    orders: [{ userId: true }]
}

const emailUser = (email?: string) => {};

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
    password: 'abcabc'
}