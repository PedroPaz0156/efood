import Hero from '../../components/Hero'
import RestauranteLista from '../../components/RestauranteLista'
import { useGetRestaurantesQuery } from '../../services/api'

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
