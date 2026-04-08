import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS } from '@shared/constants/storageKeys'

const getInitialTheme = () => {
  const lsTheme = localStorage.getItem(STORAGE_KEYS.APP_THEME)
  return lsTheme ? lsTheme : 'light'
}

const initialState = {
  currentTheme: getInitialTheme()
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light'
    }
  }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer