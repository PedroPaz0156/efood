export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getPrecoTotal = (pratos: Cardapio[]) => {
  return pratos.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco!)
  }, 0)
}
