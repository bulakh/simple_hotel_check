import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_DATE: 'CHANGE_DATE',
  CHANGE_DAY_COUNT: 'CHANGE_DAY_COUNT',
  CHANGE_EMAIL: 'CHANGE_EMAIL',

  FETCH_HOTELS: 'FETCH_HOTELS',
  SET_HOTELS: 'SET_HOTELS',
  FETCH_IMAGES: 'FETCH_IMAGES',
  SET_IMAGES: 'SET_IMAGES',
  CHANGE_FAVORITES: 'CHANGE_FAVORITES',
  CHANGE_SORT: 'CHANGE_SORT',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (name) => ({
  payload: name,
}));

export const changeDate = createAction(ActionType.CHANGE_DATE, (date) => ({
  payload: date,
}));

export const changeDayCount = createAction(ActionType.CHANGE_DAY_COUNT, (count) => ({
  payload: count,
}));

export const changeEmail = createAction(ActionType.CHANGE_EMAIL, (email) => ({
  payload: email,
}));


export const fetchHotels = createAction(ActionType.FETCH_HOTELS);

export const setHotels = createAction(ActionType.SET_HOTELS, (hotels) => ({
  payload: hotels,
}));

export const fetchImages = createAction(ActionType.FETCH_IMAGES);

export const setImages = createAction(ActionType.SET_IMAGES, (images) => ({
  payload: images,
}));

export const changeFavorites = createAction(ActionType.CHANGE_FAVORITES, (favorite) => ({
  payload: favorite,
}));

export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort,
}));
