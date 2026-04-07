import { BotaoAction, BotaoLink } from './styles'

type Props = {
  tipo: 'botao' | 'link'
  to?: string
  onClick?: () => void
  children?: string
}

const Botao = ({ tipo, children, to, onClick }: Props) => {
  if (tipo === 'botao') {
    return <BotaoAction onClick={onClick}>{children}</BotaoAction>
  }
  return <BotaoLink to={to as string}>{children}</BotaoLink>
}

export default Botao
