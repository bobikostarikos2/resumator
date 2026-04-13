import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '@pages/Home/HomePage'
import Header from "@widgets/Header/Header"

import { ThemeSync } from '@features/ThemeToggle'
import { OverlayManager } from '@features/OverlayManager'
import { PopupModalsControl } from '@features/PopupModals'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <OverlayManager />
      <PopupModalsControl />
      <ThemeSync />
    </BrowserRouter>
  )
}

export default App