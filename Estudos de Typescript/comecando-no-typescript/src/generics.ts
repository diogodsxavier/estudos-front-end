// Funções
const returnValue = <T>(value: T): T => value;

const returnNumber = returnValue<number>(5);
const returnString = returnValue<string>('5');

// Arrays
const getFirstValueFromArray = <T>(array: T[]): T => array[0];

const firstValue = getFirstValueFromArray<number>([1, 2, 3]); // 1
const firstValueString = getFirstValueFromArray<string>(['1', '2', '3']); // '1'

// Promisses
const genericPromisse = async ():Promise<number> => {
return 5;
};

// Classes
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => x + y);

const sayMyNameWalter = <T>(name: T): T => name;

const nameWalter = sayMyNameWalter<string>('Walter White');
const nameIncorrect = sayMyNameWalter<number>(5); // Error


const personagensBreakingBad = <T>(personagens: T[]): T[] => personagens;

const Personagens = personagensBreakingBad<string>(['Walter White', 'Jesse Pinkman', 'Saul Goodman']);
const personagensIncorrect = personagensBreakingBad<number>([1, 2, 3]); // Error


const ExamplePromisse = async <T>(value: T): Promise<T> => value;


// class generic
class GenericClass<T> {
    constructor(public value: T) {}
}

const genericString = new GenericClass<string>('String');
const genericNumber = new GenericClass<number>(5);