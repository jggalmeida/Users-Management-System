import React  from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import SignIn from '../Pages/Login';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}