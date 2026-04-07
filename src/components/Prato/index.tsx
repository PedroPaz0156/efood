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

const Prato = ({ id, nome, descricao, foto, porcao, preco }: Props) => (
  <PratoCard>
    <img src={foto} />
    <div>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <Botao tipo={'botao'}>Adicionar ao carrinho</Botao>
    </div>
  </PratoCard>
)

export default Prato
