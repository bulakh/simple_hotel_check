import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../Login/Login';
import Main from '../Main/Main';
import NoPage404 from '../NoPage404/NoPage404';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.LOGIN}
          render={() => localStorage.email
            ? <Redirect to={AppRoute.MAIN} />
            : <Login />
          }
        >
        </Route>
        <Route
          path={AppRoute.MAIN}
          render={() => localStorage.email
            ? <Main />
            : <Redirect to={AppRoute.LOGIN} />
          }
        >
        </Route>
        <Route>
          <NoPage404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
