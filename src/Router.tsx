import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './Pages/Home'
import { MusicFolder } from './Pages/MusicFolder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pastas" element={<Home />} />
        <Route path="/folderName" element={<MusicFolder />} />
      </Route>
    </Routes>
  )
}
