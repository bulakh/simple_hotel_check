import { put, takeEvery, call, select } from 'redux-saga/effects';
import { ActionType, setHotels } from '../actions.js';
import { getSumDates } from '../../utils.js';

const fetchDataHotels = (pattern) => fetch(`https://engine.hotellook.com/api/v2/cache.json?location=${pattern.location}&currency=rub&checkIn=${pattern.checkIn}&checkOut=${pattern.checkIn}&limit=15`);

export function* fetchHotelsWorker() {
  try {
    const store = yield select();

    const dataStore = {
      location: store.INPUT_DATA.location,
      checkIn: store.INPUT_DATA.date.toISOString().substring(0, 10),
      checkOut: getSumDates(store.INPUT_DATA.date, store.INPUT_DATA.dayCount).toISOString().substring(0, 10),
    };

    const data = yield call(fetchDataHotels, dataStore);
    const json = yield call(() => new Promise(res => res(data.json())));

    yield put(setHotels(json));
  } catch (error) {
    console.log(error);
  }
}

export function* hotelsWatcher() {
  yield takeEvery(ActionType.FETCH_HOTELS, fetchHotelsWorker);
}

