import { put, takeEvery, call } from 'redux-saga/effects';
import { ActionType, setHotels } from '../actions.js';


const fetchDataHotels = () => fetch('http://engine.hotellook.com/api/v2/cache.json?location=Москва&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=10');

export function* fetchHotelsWorker() {
  const data = yield call(fetchDataHotels);
  const json = yield call(() => new Promise(res => res(data.json())));
  yield console.log('inWorker', json);
  yield put(setHotels(json));
}

export function* hotelsWatcher() {
  yield takeEvery(ActionType.FETCH_HOTELS, fetchHotelsWorker);
}

