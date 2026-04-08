import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@shared/store/modules/theme/themeSlice'
import ButtonTheme from '@ui/Buttons/ButtonTheme/ButtonTheme'

function ThemeSwitcher(){
  const dispatch = useDispatch()
  const currentTheme = useSelector(state => state.theme.currentTheme)

  const handleClick = () => {
    dispatch(toggleTheme());
  }

  return(
    <ButtonTheme type={currentTheme} onClick={handleClick}/>
  )
}

export default ThemeSwitcher