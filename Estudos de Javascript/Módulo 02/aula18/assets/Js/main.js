// const paragrafo = document.querySelector('.paragrafo');
// const ps = paragrafo.querySelectorAll('p');

// const estilosBody = getComputedStyle(document.body);
// const backgroundColorBody = estilosBody.backgroundColor;

// for (let p of ps) {
//     p.style.backgroundColor = backgroundColorBody;
// }

const paragrafo = document.querySelector('.paragrafo');
const pf = paragrafo.querySelectorAll('p');

const corBody = getComputedStyle(document.body);
const backgroundColorBody = corBody.backgroundColor;

for (let p of pf) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
}