import {createReducer} from '@reduxjs/toolkit';
import { setHotels } from '../actions.js';

const initialState = {
  hotels: [],
};

export const receivedData = createReducer(initialState, (builder) => {
  builder
    .addCase(setHotels, (state, action) => {
      state.hotels = action.payload
    })
});

