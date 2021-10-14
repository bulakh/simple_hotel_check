import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./root-reducer.js";
import { hotelsWatcher } from "./saga/hotels.js";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(hotelsWatcher);


