import styles from './ButtonMain.module.scss'

function ButtonMain({ text }) {
  return (
    <button className={styles.btnMain}>
      { text }
    </button>
  )
}

export default ButtonMain;