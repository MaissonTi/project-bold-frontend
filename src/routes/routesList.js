import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import Cursos from '../pages/cursos';
import Aula from '../pages/aula';
import Dashboard from '../pages/dashboard';

import Route from './Route';

const RoutesList = props => (
  <>
    <Switch location={props.location}>
      <Route key="home" exact path="/" component={Home} />
      <Route key="cursoss" path="/cursos" component={Cursos} />
      <Route key="aula" path="/aula/:type" component={Aula} />
      <Route key="login" path="/login" component={Login} />
      <Route
        key="dashboard"
        path="/dashboard"
        component={Dashboard}
        isPrivate
      />
    </Switch>
  </>
);

export default RoutesList;
