import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './Pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pastas" element={<Home />} />
        {/* <Route path="/downloads" element={<FinishOrder />} /> */}
      </Route>
    </Routes>
  )
}
