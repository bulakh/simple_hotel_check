import { all } from '@redux-saga/core/effects';
import { hotelsWatcher } from './hotels';
import { imagesWatcher } from './images';

export function* rootWatcher() {
  yield all([hotelsWatcher(), imagesWatcher()]);
}
