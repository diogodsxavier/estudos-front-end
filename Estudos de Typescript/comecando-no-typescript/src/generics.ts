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