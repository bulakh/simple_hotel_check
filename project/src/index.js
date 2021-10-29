import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { fetchHotels, changeEmail, fetchImages } from './store/actions.js';


store.dispatch(fetchImages());
store.dispatch(fetchHotels());

if (localStorage.email) {
  store.dispatch(changeEmail(localStorage.email));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
