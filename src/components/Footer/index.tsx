import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { FooterBox, Social } from './styles'

const Footer = () => (
  <FooterBox>
    <div className="container">
      <img src={logo} alt="Ícone do logo da Efood" />
      <Social>
        <li>
          <img src={instagram} alt="ícone do instagram" />
        </li>
        <li>
          <img src={facebook} alt="ícone do facebook" />
        </li>
        <li>
          <img src={twitter} alt="ícone do twitter" />
        </li>
      </Social>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterBox>
)

export default Footer
