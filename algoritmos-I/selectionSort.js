const livros = require('./listaLivros')
const menorValor = require('./menorValor')
const troca = require('./trocaSelection')

livros.forEach((_, atual) => {
    let menor = menorValor(livros, atual)

    troca(livros, atual, menor)
})

console.log(livros)
