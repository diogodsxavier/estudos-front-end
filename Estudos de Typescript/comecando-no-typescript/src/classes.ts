interface IPerson {
    id: number;
    sayMyName(): string;
}

class Person implements IPerson {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName() {
        return `My name is ${this.name}`;
    }
}

// Refatorando a classe Person, é a mesma coisa que acima
class PersonRefact {
    constructor(
        readonly id: number,
        protected name: string,
        private age: number,
    ) {}
}

class Employee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }

    whoMyName() {
        return `My name is ${this.name}`;
    }

    // Não acessivel por ser Private
    // whoMyAge() {
    //     return `My age is ${this.age}`;
    // }
}

interface IBreakingBad {
    id: number;
    sayMyName(): string;
}

class BreakingBad implements IBreakingBad {
    constructor(
        readonly id: number,
        protected name: string,
    ) {}

    sayMyName() {
        return `Say my name! You is ${this.name}`;
    }
}

const person = new BreakingBad(1, 'Heisenberg');

console.log(person.sayMyName()); // Say my name! You is Heisenberg