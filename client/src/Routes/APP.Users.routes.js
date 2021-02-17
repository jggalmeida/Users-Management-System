import React  from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Dashboard from '../Pages/Usuario/Dashboard';
import Detalhes_users from '../Pages/Usuario/Detalhes'


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard_users" exact component={Dashboard} />
        <Route path="/detalhes_users/:id" exact component={Detalhes_users} />

      </Switch>
    </BrowserRouter>
  );
}