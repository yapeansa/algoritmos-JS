const { edGalho, edFolha } = require('./arrays')

function juntaListas (lista1, lista2) {
    let listaFinal = []
    let posicaoAtualLista1 = 0
    let posicaoAtualLista2 = 0
    let atual = 0

    // O loop abaixo termina quando pelo menos uma das listas acabar.

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1]
        let produtoAtualLista2 = lista2[posicaoAtualLista2]
        console.log(`Comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`)

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1
            posicaoAtualLista1++
        } else {
            listaFinal[atual] = produtoAtualLista2
            posicaoAtualLista2++
        }
        atual++
    }

    // Caso a lista 1 ainda não tenha terminado, adiocione seus elementos na lista final.

    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1]
        posicaoAtualLista1++
        atual++
    }

    // Caso a lista 2 ainda não tenha terminado, adiocione seus elementos na lista final.

    while (posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista1[posicaoAtualLista2]
        posicaoAtualLista2++
        atual++
    }

    // Retorna a lista final

    return listaFinal
}

console.log(juntaListas(edGalho, edFolha))
