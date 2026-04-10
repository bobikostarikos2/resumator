import CactusLogo from '@svg/logos/cactus.svg?react'

import styles from './LogotypeApp.module.scss'

function Logotype(){
  return(
    <span className={styles.logotypeApp}>
      <CactusLogo width={32} height={32} /> Резюматор
    </span>
  )
}

export default Logotype;