import { RestauranteInfos } from '../../pages/Home'
import Restaurante from '../Restaurante'
import { Lista } from './styles'

type Props = {
  catalogo: RestauranteInfos[]
}

const RestauranteLista = ({ catalogo }: Props) => (
  <div className="container">
    <Lista>
      {catalogo.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurante
            id={restaurante.id}
            nome={restaurante.titulo}
            avaliacao={restaurante.avaliacao}
            capa={restaurante.capa}
            descricao={restaurante.descricao}
            tipo={restaurante.tipo}
            destacado={restaurante.destacado}
          />
        </li>
      ))}
    </Lista>
  </div>
)

export default RestauranteLista
