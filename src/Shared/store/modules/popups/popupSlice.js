import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  popups: [],
}

const popupsSlice = createSlice({
  name: 'popups',
  initialState,
  reducers:{
    //Зарегистрировать попап
    add: (state, action) => {
      if(state.popups.includes(action.payload)) return;
      state.popups.push(action.payload);
    },

    //Убрать конкретный попап
    remove: (state, action) => {
      console.log(action.payload)
      state.popups = state.popups.filter(key => key !== action.payload);
    },

    //Убрать последний
    removeLast: (state) => {
      state.popups.pop();
    },

    //Убрать все
    removeAll: (state) => {
      state.popups = [];
    }
  }
})

export const { add, remove, removeLast, removeAll } = popupsSlice.actions;

export default popupsSlice.reducer