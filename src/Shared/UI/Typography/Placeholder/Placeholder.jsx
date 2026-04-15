import styles from './Placeholder.module.scss'

function Placeholder({ text, className, bgColor = 'var(--bg-popup-wrapper)' }){
  return(
    <span className={`${styles.placeholder} ${className}`} style={{ backgroundColor: bgColor }}>
      {text}
    </span>
  )
}

export default Placeholder