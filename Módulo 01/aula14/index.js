let num1 = 0.7; // Number
let num2 = 0.1; //Number

//IEEE 754 - 2008
// num1 = num1 + num2
/*num1 = ((num1 * 100) + (num2 * 100)) / 100;//0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100;//0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100;//1.0*/

num1 += num2; 
num1 = Number(num1.toFixed(2));

console.log(Number.isInteger(num1));
console.log(num1); // 1.0



//console.log(num1.toString() + num2);
//console.log(typeof num1);
//console.log(num1.toString(2));
//console.log(num1.toFixed(2));
//console.log(Number.isInteger(num1));
//let temp = num1 * 'Olá';
//console.log(Number.isNaN(temp));