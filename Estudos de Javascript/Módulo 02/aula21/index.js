// Escreva uma função que receba 2 números e retorne o maior deles

function maiorNumero(num1, num2) {
    // if (num1 > num2) return num1;
    // return num2;
    return num1 > num2 ? num1 : num2;
}

const maior = (x, y) => x > y ? x : y;


console.log(maior(11, 10));