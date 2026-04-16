import { useDispatch, useSelector } from 'react-redux'
import Botao from '../Botao'
import {
  CarrinhoContainer,
  CarrinhoItem,
  Overlay,
  Precos,
  Sidebar
} from './styles'
import { RootReducer } from '../../store'
import { fechar, remover } from '../../store/reducers/carrinho'
import { formataPreco } from '../Prato'

const Carrinho = () => {
  const { isOpen, pratos } = useSelector((state: RootReducer) => state.carrinho)

  const dispatch = useDispatch()

  const fecharCarrinho = () => {
    dispatch(fechar())
  }

  const removerItem = (id: number) => {
    dispatch(remover(id))
  }

  const calcularPrecoTotal = () => {
    return pratos.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CarrinhoContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={fecharCarrinho} />
      <Sidebar>
        <ul>
          {pratos.map((item) => (
            <CarrinhoItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removerItem(item.id)} />
            </CarrinhoItem>
          ))}
        </ul>
        <Precos>
          <p>Valor Total:</p>
          <span>{formataPreco(calcularPrecoTotal())}</span>
        </Precos>
        <Botao tipo={'botao'}>Continuar com a entrega</Botao>
      </Sidebar>
    </CarrinhoContainer>
  )
}

export default Carrinho
