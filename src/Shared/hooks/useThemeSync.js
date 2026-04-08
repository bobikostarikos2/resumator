import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useThemeSync = () => {
  const theme = useSelector(state => state.theme.currentTheme)
  
  useEffect(() => {
    document.body.setAttribute('data-app-theme', theme)
  }, [theme])

  
}
