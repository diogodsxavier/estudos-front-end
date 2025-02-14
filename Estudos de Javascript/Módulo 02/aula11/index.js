var verdadeira = true;

// // Let tem escopo de bloco {...Bloco}
// // Var só tem escopo de função

let nome = 'Diogo';
var nome2 = 'Luiz';

// if (verdadeira) {
//     let nome = 'Daniel';
//     var nome2 = 'Beethoven';
//     console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = 'Chaves';
//         var nome2 = 'Mozart';
//         console.log(nome, nome2);
//     }
// }

//console.log(nome, nome2);


function falaOi () {
    var sobrenome = 'Daniel';

    if (verdadeira) {
        let nome = 'DANIEL';
        console.log(sobrenome);
    }
}

falaOi();

