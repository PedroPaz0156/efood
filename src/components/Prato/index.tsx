import Botao from '../Botao'
import { PratoCard } from './styles'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

const Prato = ({ id, nome, descricao, foto, porcao, preco }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.slice(0, 187) + '...'
    }

    return descricao
  }

  return (
    <PratoCard>
      <img src={foto} />
      <div>
        <h3>{nome}</h3>
        <p>{getDescricao(descricao)}</p>
      </div>
      <Botao tipo={'botao'}>Adicionar ao carrinho</Botao>
    </PratoCard>
  )
}

export default Prato
