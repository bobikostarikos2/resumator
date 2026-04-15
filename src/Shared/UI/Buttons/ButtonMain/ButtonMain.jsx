import styles from './ButtonMain.module.scss'

function ButtonMain({ text, onClick, fullWidth }) {
  return (
    <button className={styles.btnMain} onClick={onClick} style={{ width: fullWidth ? '100%' : 'fit-content'}}>
      { text }
    </button>
  )
}

export default ButtonMain;