export const validateImageFile = (file) => {
  if (!file) return { isValid: false, error: 'Файл не выбран' }
  if (!file.type.startsWith('image/')) {
    return { isValid: false, error: 'Файл должен быть изображением' }
  }
  return { isValid: true, error: null }
}

export const readFileAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('Ошибка чтения файла'))
    reader.readAsDataURL(file)
  })
}

export const fileToImageData = async (file) => {
  const validation = validateImageFile(file)
  if (!validation.isValid) {
    throw new Error(validation.error)
  }
  
  const base64 = await readFileAsBase64(file)
  return {
    base64,
    file,
    name: file.name,
    size: file.size,
    type: file.type
  }
}