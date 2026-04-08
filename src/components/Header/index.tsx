import { Header as HeaderBar, Links, LinkItem, LinkCart } from './style'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categorias">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/novidades">Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/promocoes">Promoções</Link>
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
