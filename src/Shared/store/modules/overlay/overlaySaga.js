import { delay, put, takeEvery, race, take } from 'redux-saga/effects'
import { addMessage, removeMessage, dismissMessageSaga, showMessageSaga } from './overlaySlice'

import { OVERLAY_VISIBLE_TIME } from '@shared/constants/appConfig';

function* handleOverlayMessage(action) {
  const message = {
    id: crypto.randomUUID(),
    text: action.payload.text,
    type: action.payload.type || 'success'
  };

  yield put(addMessage(message))

  yield race({
    timeout: delay(OVERLAY_VISIBLE_TIME),
    dismissed: take(_action => 
      _action.type === dismissMessageSaga.type && _action.payload === message.id
    )
  });
  
  yield put(removeMessage(message.id));
}

export function* watchOverlayMessages() {
  yield takeEvery(showMessageSaga.type, handleOverlayMessage);
}