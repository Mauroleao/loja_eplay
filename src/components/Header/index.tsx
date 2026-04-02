import { Header as HeaderBar } from './style'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EPLAY" />
  </HeaderBar>
)

export default Header
