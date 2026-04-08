import { configureStore } from '@reduxjs/toolkit'
import { themeReducer, themeMiddleware } from './modules/theme'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefault) => getDefault().concat([
    themeMiddleware
  ])
})