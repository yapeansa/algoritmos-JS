const livros = require('./listaLivros')
const troca = require('./troca')

function insertionSort (livros) {
    for (let atual = 0; atual < livros.length; atual++) {
        let analise = atual
        while (analise > 0 && livros[analise].preco < livros[analise - 1].preco) {
            troca(livros, analise)
            analise--
        }
    }
    console.log(livros)
}

insertionSort(livros)
