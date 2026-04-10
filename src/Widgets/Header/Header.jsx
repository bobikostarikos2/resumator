import Logotype from '@ui/Logotypes/LogotypeApp/LogotypeApp'
import ButtonMain from '@ui/Buttons/ButtonMain/ButtonMain'
import { ThemeSwitcher } from '@features/ThemeToggle'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <Logotype className={styles.header__gridLogo} />
      <div></div>
      <ThemeSwitcher className={styles.header__gridTheme}/>
      <ButtonMain 
        text='Создать'
        className={styles.header__gridEnter}
      />
    </header>
  )
}

export default Header;