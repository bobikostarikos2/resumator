import Logotype from '@ui/Logotypes/LogotypeApp/LogotypeApp'
import { CreateResumeButton } from '@features/CreateResume'
import { ThemeSwitcher } from '@features/ThemeToggle'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <Logotype className={styles.header__gridLogo} />
      <div></div>
      <ThemeSwitcher className={styles.header__gridTheme}/>
      <CreateResumeButton className={styles.header__gridEnter}/>
    </header>
  )
}

export default Header;