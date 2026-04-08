import SunLogo from '@svg/themes/sun.svg?react'
import MoonLogo from '@svg/themes/moon.svg?react'

import styles from './ButtonTheme.module.scss'

function ButtonTheme({ type = 'light', onClick }){
  return (
    <button className={styles.buttonTheme} onClick={onClick}>
      { type === 'light' && <SunLogo width={24} height={24} /> }
      { type === 'dark' && <MoonLogo width={24} height={24} /> }
    </button>
  )
}

export default ButtonTheme;