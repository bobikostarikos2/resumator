import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useThemeSync } from '@shared/hooks/useThemeSync'
import Button from "@ui/Buttons/ButtonMain/ButtonMain"
import Header from "@widgets/Header/Header"
import Footer from '@widgets/Footer/Header/Footer'

function App() {
  useThemeSync()
  
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  )
}

export default App