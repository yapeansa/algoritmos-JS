const livros = require('./listaLivros')
const menorValor = require('./menorValor')

// for (let atual = 0; atual < livros.length; atual++) {
//     let menor = menorValor(livros, atual)
//     let livroAtual = livros[atual]
//     console.log('Passo', atual)
//     console.log(`Livro atual: ${JSON.stringify(livroAtual)}`)
//     let livroMenorPreco = livros[menor]
//     console.log(`Livro menor preço: ${JSON.stringify(livroMenorPreco)}`)
//     livros[atual] = livroMenorPreco
//     livros[menor] = livroAtual
// }

livros.forEach((_, atual) => {
    let menor = menorValor(livros, atual)
    let livroAtual = livros[atual]
    console.log('Passo', atual)
    console.log(`Livro atual: ${JSON.stringify(livroAtual)}`)
    let livroMenorPreco = livros[menor]
    console.log(`Livro menor preço: ${JSON.stringify(livroMenorPreco)}`)
    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
})

console.log(livros)
