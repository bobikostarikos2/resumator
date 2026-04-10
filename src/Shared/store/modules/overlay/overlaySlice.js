import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  messages: [],
}

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    //Добавить сообщение
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    //Удалить сообщение
    removeMessage: (state, action) => {
      state.messages = state.messages.filter(m => m.id !== action.payload);
    },

    //Cигналы для саги
    //Экшн для отмены сообщения
    dismissMessageSaga: () => {},
    //Экшн показать сообщения
    showMessageSaga: () => {}
  }
});

export const { addMessage, removeMessage, dismissMessageSaga, showMessageSaga } = overlaySlice.actions;

export default overlaySlice.reducer;