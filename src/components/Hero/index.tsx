import logo from '../../assets/images/logo.png'
import { HeroBack } from './styles'

const Hero = () => (
  <HeroBack>
    <div className="container">
      <img src={logo} alt="logo do Efood" />
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </div>
  </HeroBack>
)

export default Hero
