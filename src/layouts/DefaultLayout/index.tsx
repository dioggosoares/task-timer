import { Outlet } from 'react-router-dom'

// IMPORT COMPONENTS
import { Header } from '../../components/Header'

// IMPORT STYLES
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
