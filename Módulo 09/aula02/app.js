const Cachorro = require('./z/mod2.js');

const c1 = new Cachorro('Beethoven');
c1.latir();

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'XXX'));