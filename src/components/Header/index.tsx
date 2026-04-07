import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeaderBox, NavBar } from './styles'

const Header = () => (
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
      <li>0 produto(s) no carrinho</li>
    </NavBar>
  </HeaderBox>
)

export default Header
