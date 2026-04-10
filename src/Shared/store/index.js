import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { themeReducer, themeMiddleware } from './modules/theme'
import { overlayReducer } from './modules/overlay'
import { watchOverlayMessages } from './modules/overlay/overlaySaga'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    overlay: overlayReducer
  },
  middleware: (getDefault) => getDefault().concat([
    themeMiddleware,
    sagaMiddleware
  ])
})

sagaMiddleware.run(watchOverlayMessages);