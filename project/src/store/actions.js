import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_DATE: 'CHANGE_DATE',
  CHANGE_DAY_COUNT: 'CHANGE_DAY_COUNT',
  CHANGE_EMAIL: 'CHANGE_EMAIL',

  FETCH_HOTELS: 'FETCH_HOTELS',
  SET_HOTELS: 'SET_HOTELS',
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

export const changeEmail= createAction(ActionType.CHANGE_EMAIL, (email) => ({
  payload: email,
}));

export const fetchHotels = createAction(ActionType.FETCH_HOTELS);

export const setHotels = createAction(ActionType.SET_HOTELS, (hotels) => ({
  payload: hotels,
}));
