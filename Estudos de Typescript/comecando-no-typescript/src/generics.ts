const returnValue = <T>(value: T): T => value;

const message = returnValue<string>('Hello, World!'); 
const returnNum = returnValue<number>(1);

const getFirstValueFromArray = <T>(value: T[]): T => value[0];

const firstValue = getFirstValueFromArray<number>([1, 2, 3, 4, 5]);
const firstValueString = getFirstValueFromArray<string>(['a', 'b', 'c', 'd', 'e']);

// Promisses
const genericPromisse = async ():Promise<number> => {
    return 5;
};