import {combineReducers} from 'redux';
import { inputData } from './inputData/inputData.js';
import { receivedData } from './receivedData/receivedData.js';



export const NameSpace = {
  INPUT_DATA: 'INPUT_DATA',
  RECEIVED_DATA: 'RECEIVED_DATA',
};

export default combineReducers({
  [NameSpace.INPUT_DATA]: inputData,
  [NameSpace.RECEIVED_DATA]: receivedData,
});
