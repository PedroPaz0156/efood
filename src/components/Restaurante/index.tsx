import estrelaAvaliacao from '../../assets/images/star_favorite-[#1499].png'
import Botao from '../Botao'
import { Cabecalho, Descricao, RestauranteCard, Tag } from './styles'

type Props = {
  id: number
  nome: string
  avaliacao: number
  capa: string
  descricao: string
  tipo: string
  destacado: boolean
}

const Restaurante = ({
  nome,
  id,
  avaliacao,
  capa,
  descricao,
  tipo,
  destacado
}: Props) => (
  <RestauranteCard>
    <img src={capa} />
    <Tag>{tipo}</Tag>
    <div>
      <Cabecalho>
        <h2>{nome}</h2>
        <span>
          {avaliacao} <img src={estrelaAvaliacao} />
        </span>
      </Cabecalho>
      <Descricao>{descricao}</Descricao>
      <Botao tipo={'link'} to={`/restaurantes/${id}`}>
        Saiba mais
      </Botao>
    </div>
  </RestauranteCard>
)

export default Restaurante
