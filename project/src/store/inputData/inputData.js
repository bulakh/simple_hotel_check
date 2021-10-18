import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeDate, changeDayCount, changeEmail } from '../actions.js';

const initialState = {
  location: 'Москва',
  date: new Date(),
  dayCount: '1',
  email: ''
};

export const inputData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.location = action.payload
    })
    .addCase(changeDate, (state, action) => {
      state.date = action.payload
    })
    .addCase(changeDayCount, (state, action) => {
      state.dayCount = action.payload
    })
    .addCase(changeEmail, (state, action) => {
      state.email = action.payload
    })
});

