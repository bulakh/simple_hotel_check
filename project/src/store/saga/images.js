import { put, takeEvery, call } from 'redux-saga/effects';
import { ActionType, setImages } from '../actions.js';


const fetchDataImages = () => fetch('https://picsum.photos/v2/list?page=11&limit=10');

export function* fetchImagesWorker() {
  try {
    const data = yield call(fetchDataImages);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(setImages(json));
  } catch (error) {
    console.log(error);
  }
}

export function* imagesWatcher() {
  yield takeEvery(ActionType.FETCH_IMAGES, fetchImagesWorker);
}

