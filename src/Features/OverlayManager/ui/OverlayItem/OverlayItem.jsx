import CloseButton from '@ui/Buttons/ButtonClose/ButtonClose'

import styles from './OverlayItem.module.scss'

function OverlayItem({ type, text, onClose }){
  return(
    <div className={`${styles.overlayItem} ${styles[`overlayItem--${type}`]}`}>
      { text } <CloseButton color={'var(--gray-50)'} onClick={() => onClose} /> 
    </div>
  )
}

export default OverlayItem