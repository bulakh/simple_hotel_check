import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../Login/Login';
import Main from '../Main/Main';
import NoPage404 from '../NoPage404/NoPage404';



function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route>
          <NoPage404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
