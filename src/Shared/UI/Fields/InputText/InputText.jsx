import { useRef, useState } from 'react'
import styles from './InputText.module.scss'
import Placeholder from '@ui/Typography/Placeholder/Placeholder'

function InputText({ placeholder, onChange, className }){
  const inputRef = useRef(null)
  const [isEmpty, setIsEmpty] = useState(true)

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  const handleChange = () => {
    const value = inputRef.current?.value || ''
    const hasValue = value.length > 0
    
    if (hasValue && isEmpty) {
      setIsEmpty(false)
    } else if (!hasValue && !isEmpty) {
      setIsEmpty(true)
    }

    onChange?.(value)
  }

  return(
    <div className={`${styles.inputText} ${className}`} onClick={handleContainerClick}>
      <input 
        className={styles.inputText__field} 
        ref={inputRef}
        onChange={() => handleChange()}
      />
      <Placeholder text={ placeholder } className={`${styles.inputText__placeholder} ${!isEmpty && styles.inputText__placeholder_active}`}/>
    </div>
  )
}

export default InputText