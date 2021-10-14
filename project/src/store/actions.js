import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',

  FETCH_HOTELS: 'FETCH_HOTELS',
  SET_HOTELS: 'SET_HOTELS',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (name) => ({
  payload: name,
}));

export const fetchHotels = createAction(ActionType.FETCH_HOTELS);

export const setHotels = createAction(ActionType.SET_HOTELS, (hotels) => ({
  payload: hotels,
}));
