import {createReducer} from '@reduxjs/toolkit';
import { setHotels, changeFavorites, changeSort, setImages } from '../actions.js';

const initialState = {
  hotels: [],
  favorites: [],
  images: [],
  sort: 'WITHOUT',
};

export const receivedData = createReducer(initialState, (builder) => {
  builder
    .addCase(setHotels, (state, action) => {
      state.hotels = action.payload
    })
    .addCase(changeFavorites, (state, action) => {
      state.favorites = action.payload
    })
    .addCase(setImages, (state, action) => {
      state.images = action.payload
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload
    })
});

