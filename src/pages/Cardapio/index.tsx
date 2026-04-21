import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import PratoLista from '../../components/PratoLista'
import { useGetCardapioQuery } from '../../services/api'
import Carrinho from '../../components/Carrinho'

const Cardapio = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetCardapioQuery(id!)

  if (!restaurante) {
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
      <PratoLista restaurante={restaurante} />
      <Carrinho />
    </>
  )
}

export default Cardapio
