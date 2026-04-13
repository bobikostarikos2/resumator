import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function ThemeSync(){
  const theme = useSelector(state => state.theme.currentTheme)
  
  useEffect(() => {
    document.body.setAttribute('data-app-theme', theme)
  }, [theme])
}

export default ThemeSync;