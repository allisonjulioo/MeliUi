import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useRouter} from 'routes/useRouter';
import {routes} from './builder';

const Router = () => {
  useRouter();
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.key}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route path='*'>
        <h1>404 - Page Not Found</h1>
      </Route>
    </Switch>
  );
};

export {Router};
