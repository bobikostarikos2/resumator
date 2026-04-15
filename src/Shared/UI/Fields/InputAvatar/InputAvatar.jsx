import { useRef, useState } from 'react'
import { fileToImageData } from '@utils/libs/fileUtils'

import styles from './InputAvatar.module.scss'
import PlusSvg from '@svg/ui/plus.svg?react'

function InputAvatar({ className, onImageChange }){
  const inputRef = useRef(null)
  const [preview, setPreview] = useState(null)

  const handleClick = () => {
    inputRef.current?.click()
  }
  
  const handleFileSelect = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    try {
      const imageData = await fileToImageData(file)
      setPreview(imageData.base64)
      onImageChange?.(imageData)
    } catch (error) {
      console.error(error.message)
    } finally {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  const handleRemove = (e) => {
    e.stopPropagation()
    setPreview(null)
    onImageChange?.(null)
  }

  return(
    <div className={`${styles.inputAvatar} ${className}`} onClick={handleClick}>
      { preview ? (
        <img className={styles.inputAvatar__preview} src={preview} alt={'Аватар'}/>
      ) : (
        <button className={styles.inputAvatar__callButton}>
          <PlusSvg />
          <span className={styles.inputAvatar__txt}>Фото</span>
        </button>
      )} 
      { preview && (
        <button className={styles.inputAvatar__deleteButton} onClick={handleRemove} type="button">
          Удалить
        </button>
      )}
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleFileSelect} />
    </div>
  )
}

export default InputAvatar