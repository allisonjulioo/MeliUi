import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {routes} from './builder';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.key}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Route path='/unauthorized'>
          <h1>Unauthorized</h1>
        </Route>
        <Route path='*'>
          <h1>404 - Page Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export {Router};
