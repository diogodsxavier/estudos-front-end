const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

const pessoas = [
    
];

fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a'});