const { edGalho, edFolha } = require('./arrays')

function juntaListas (lista1, lista2) {
    let listaFinal = []
    let posicaoAtualLista1 = 0
    let posicaoAtualLista2 = 0
    let atual = 0

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1]
        let produtoAtuallista2 = lista2[posicaoAtualLista2]
        console.log(`Comparando ${produtoAtualLista1.titulo} com ${produtoAtuallista2.titulo}`)

        if (produtoAtualLista1.preco < produtoAtuallista2.preco) {
            listaFinal[atual] = produtoAtualLista1
            posicaoAtualLista1++
        } else {
            listaFinal[atual] = produtoAtuallista2
            posicaoAtualLista2++
        }
        atual++
    }

    return listaFinal
}

console.log(juntaListas(edGalho, edFolha))
