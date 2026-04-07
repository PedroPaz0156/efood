import { RestauranteInfos } from '../../pages/Home'
import Prato from '../Prato'
import { ListaPratos } from './styles'

type Props = {
  cardapio: RestauranteInfos[]
}

const PratoLista = ({ cardapio }: Props) => (
  <div className="container">
    <ListaPratos>
      {cardapio.map((restaurante) => (
        <li key={restaurante.cardapio.id}>
          <Prato
            id={restaurante.cardapio.id}
            nome={restaurante.cardapio.nome}
            descricao={restaurante.cardapio.descricao}
            foto={restaurante.cardapio.foto}
            porcao={restaurante.cardapio.porcao}
            preco={restaurante.cardapio.preco}
          />
        </li>
      ))}
    </ListaPratos>
  </div>
)

export default PratoLista
