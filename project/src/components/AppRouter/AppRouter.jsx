import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { AppRoute } from "../../const";
import Login from "../../pages/Login/Login";
import Main from "../../pages/Main/Main";
import NoPage404 from "../../pages/NoPage404/NoPage404";

function AppRouter() {
  return (
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
  )
}

export default AppRouter;
