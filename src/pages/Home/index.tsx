import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import RestauranteLista from '../../components/RestauranteLista'

export type RestauranteInfos = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [catalogo, setCatalogo] = useState<RestauranteInfos[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCatalogo(res))
  }, [])

  return (
    <>
      <Hero />
      <RestauranteLista catalogo={catalogo} />
    </>
  )
}

export default Home
