import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useThemeSync } from '@features/ThemeToggle/hooks/useThemeSync'
import HomePage from '@pages/Home/HomePage'
import Header from "@widgets/Header/Header"
import { OverlayManager } from '@features/OverlayManager'

function App() {
  useThemeSync()
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <OverlayManager />
    </BrowserRouter>
  )
}

export default App