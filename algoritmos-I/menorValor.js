function menorValor (produtos, posicaoInicial) {
    let maisBarato = posicaoInicial

    for (let atual = posicaoInicial; atual < produtos.length; atual++) {
        if (produtos[atual].preco < produtos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    
    return maisBarato
}

module.exports = menorValor
