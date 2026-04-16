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
            prato={{
              foto: cardapio.foto,
              preco: cardapio.preco,
              id: cardapio.id,
              nome: cardapio.nome,
              descricao: cardapio.descricao,
              porcao: cardapio.porcao
            }}
          />
        </li>
      ))}
    </ListaPratos>
  </div>
)

export default PratoLista
