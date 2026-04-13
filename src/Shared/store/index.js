import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { themeReducer, themeMiddleware } from './modules/theme'
import { overlayReducer, watchOverlayMessages } from './modules/overlay'
import { popupsReducer } from './modules/popups'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    overlay: overlayReducer,
    popups: popupsReducer
  },
  middleware: (getDefault) => getDefault().concat([
    themeMiddleware,
    sagaMiddleware
  ])
})

sagaMiddleware.run(watchOverlayMessages);