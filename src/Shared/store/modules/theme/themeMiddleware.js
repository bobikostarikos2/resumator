import { STORAGE_KEYS } from '@shared/constants/storageKeys'

export const themeMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === 'theme/toggleTheme') {
    const theme = store.getState().theme.currentTheme
    localStorage.setItem(STORAGE_KEYS.APP_THEME, theme)
  }
  
  return result
}