import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

// IMPORT STYLES
import { HeaderContainer } from './styles'

// IMPORT IMAGES
import logoDashcode from '../../assets/logo-dashcode.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoDashcode} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
