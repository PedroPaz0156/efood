import { RestauranteInfos } from '../../pages/Home'
import Prato from '../Prato'
import { ListaPratos } from './styles'

type Props = {
  restaurante: RestauranteInfos
}

const PratoLista = ({ restaurante }: Props) => (
  <div className="container">
    <ListaPratos>
      {restaurante.cardapio.map((cardapio) => (
        <li key={cardapio.id}>
          <Prato
            id={cardapio.id}
            nome={cardapio.nome}
            descricao={cardapio.descricao}
            foto={cardapio.foto}
            porcao={cardapio.porcao}
            preco={cardapio.preco}
          />
        </li>
      ))}
    </ListaPratos>
  </div>
)

export default PratoLista
