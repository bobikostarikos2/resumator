import ButtonClose from '@ui/Buttons/ButtonClose/ButtonClose'

import styles from './ModalDefault.module.scss'

function ModalDefault({ children, zIndex = 0, onClose }){
  return(
    <div className={styles.modalDefault} style={{ zIndex: zIndex + 10000 }}>
      <div className={styles.modalDefault__wrapper}>
        <div className={`${styles.modalDefault__scrollBox} defaultScroll`}>
          { children }
        </div>
      </div>
      <ButtonClose className={styles.modalDefault__close} color={'white'} size={36} onClick={onClose} />
    </div>
  )
}

export default ModalDefault;