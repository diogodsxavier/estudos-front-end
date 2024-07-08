const produto = {nome: 'Produto', preco: 4.5, material: 'Porcelana'};

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}












// const produto = {nome: 'Produto', preco: 4.5};
// const caneca = Object.assign({}, produto, {material: 'porcelana'});

// caneca.nome = 'Outro nome';
// caneca.preco = 8.5;

// console.log(produto);
// console.log(caneca);




// const produto = {nome: 'Produto', preco: 4.5};
// const caneca = { 
//     ...produto,
//     material: 'porcelana'
// };

// caneca.nome = 'Outro nome';
// caneca.preco = 8.5;

// console.log(produto);
// console.log(caneca);