// Tipos no TypescriptT
let age: string = "Hello World!";
const names: string[] = ["diogo", "daniel", "silva"];
const num: number[] = [1, 2, 3, 4, 5, 6];
let qualqueCoisa: any = 5;
qualqueCoisa = '1'; 

// Tuples
const peaple: [string, string, number] = ['Diogo', 'Daniel', 20];

// Lista de Tuples
const peaples: [string, number][] = [
    ['Diogo', 20],
    ['José', 44],
    ['Denize', 39],
    ['Dherik', 16]
];
 
//  intersections

const userId: string | number | boolean = 1;