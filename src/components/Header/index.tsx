import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { CarrinhoText, HeaderBox, NavBar } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { abrir } from '../../store/reducers/carrinho'

const Header = () => {
  const dispatch = useDispatch()
  const { pratos } = useSelector((state: RootReducer) => state.carrinho)

  const abrirCarrinho = () => {
    dispatch(abrir())
  }

  return (
    <HeaderBox>
      <NavBar className="container">
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Restaurantes
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={logo} />
          </Link>
        </li>
        <li>
          <CarrinhoText onClick={abrirCarrinho}>
            {pratos.length} produto(s) no carrinho
          </CarrinhoText>
        </li>
      </NavBar>
    </HeaderBox>
  )
}

export default Header
