function trocaSelection (lista, atual, menor) {
    let livroAtual = lista[atual]
    let livroMenorPreco = lista[menor]
    lista[atual] = livroMenorPreco
    lista[menor] = livroAtual
}

module.exports = trocaSelection
