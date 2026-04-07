import { Header as HeaderBar, Links, LinkItem, LinkCart } from './style'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#home">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#about">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#contact">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>

    <LinkCart>
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
