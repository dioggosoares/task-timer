import { Routes, Route } from 'react-router-dom'

// IMPORT LAYOUTS
import { DefaultLayout } from './layouts/DefaultLayout'

// IMPORT PAGES
import { Home } from './pages/Home'
import { History } from './pages/History'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
