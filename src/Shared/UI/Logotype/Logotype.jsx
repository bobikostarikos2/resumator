import CactusLogo from '@svg/logos/cactus.svg?react'

import styles from './Logotype.module.scss'

function Logotype(){
  return(
    <span className={styles.logotype}>
      <CactusLogo width={32} height={32} /> Резюматор
    </span>
  )
}

export default Logotype;