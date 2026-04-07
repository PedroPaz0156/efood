import { Fundo, NomeRestaurante, TipoRestaurante } from './styles'

type Props = {
  tipo: string
  nome: string
  capa: string
}

const Banner = ({ tipo, nome, capa }: Props) => (
  <Fundo style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <TipoRestaurante>{tipo}</TipoRestaurante>
      <NomeRestaurante>{nome}</NomeRestaurante>
    </div>
  </Fundo>
)

export default Banner
