import {createReducer} from '@reduxjs/toolkit';
import { changeCity } from '../actions.js';

const initialState = {
  location: 'Москва',
};

export const inputData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.location = action.payload
    })
});

