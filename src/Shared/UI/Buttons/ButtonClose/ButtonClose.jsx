import styles from './ButtonClose.module.scss'

function ButtonClose({ size = 28, color = 'var(--gray-900)', onClick }) {
  return (
    <button
      onClick={onClick()}
      className={styles.buttonClose}
      style={{ width: size, height: size, color }}
    >
      <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 8 8" fill="none">
        <line x1="1" y1="1" x2="7" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="1" x2="1" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </button>
  )
}

export default ButtonClose