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