import styles from './ButtonMain.module.scss'

function ButtonMain({ text, onClick }) {
  return (
    <button className={styles.btnMain} onClick={onClick}>
      { text }
    </button>
  )
}

export default ButtonMain;