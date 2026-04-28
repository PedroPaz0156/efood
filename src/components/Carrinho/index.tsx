import { useDispatch, useSelector } from 'react-redux'
import Botao from '../Botao'
import * as S from './styles'
import { RootReducer } from '../../store'
import { fechar, remover } from '../../store/reducers/carrinho'
import { usePurchaseMutation } from '../../services/api'
import { formataPreco, getPrecoTotal } from '../../utils'

const Carrinho = () => {
  const { isOpen, pratos } = useSelector((state: RootReducer) => state.carrinho)
  const [compra, { data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const fecharCarrinho = () => {
    dispatch(fechar())
  }

  const removerItem = (id: number) => {
    dispatch(remover(id))
  }

  return (
    <S.SideContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={fecharCarrinho} />
      <S.Sidebar>
        <ul>
          {pratos.map((item) => (
            <S.CarrinhoItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removerItem(item.id)} />
            </S.CarrinhoItem>
          ))}
        </ul>
        <S.Precos>
          <p>Valor Total:</p>
          <span>{formataPreco(getPrecoTotal(pratos))}</span>
        </S.Precos>
        <Botao tipo={'botao'}>Continuar com a entrega</Botao>
      </S.Sidebar>
    </S.SideContainer>
  )
}

export default Carrinho
