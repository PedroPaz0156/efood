import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { RestauranteInfos } from '../Home'
import { useEffect, useState } from 'react'
import PratoLista from '../../components/PratoLista'

const Cardapio = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<RestauranteInfos>()
  const [cardapio, setCardapio] = useState<RestauranteInfos[]>([])

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h1>Carregando...</h1>
  }
  if (!cardapio) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Header />
      <Banner
        tipo={restaurante.tipo}
        nome={restaurante.titulo}
        capa={restaurante.capa}
      />
      <PratoLista cardapio={cardapio} />
    </>
  )
}

export default Cardapio
