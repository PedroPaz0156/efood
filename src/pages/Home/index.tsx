import Hero from '../../components/Hero'
import RestauranteLista from '../../components/RestauranteLista'
import { useGetRestaurantesQuery } from '../../services/api'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestauranteInfos = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: catalogo } = useGetRestaurantesQuery()

  if (!catalogo) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero />
      <RestauranteLista catalogo={catalogo} />
    </>
  )
}

export default Home
