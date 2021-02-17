import React  from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Dashboard from '../Pages/Administrador/Dashboard';
import Detalhes from '../Pages/Administrador/Detalhes';
import Cadastros from '../Pages/Administrador/Cadastro';
import Editar from '../Pages/Administrador/Editar';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard_adm" exact component={Dashboard} />
        <Route path="/detalhes/:id" exact component={Detalhes} />
        <Route path="/cadastros" exact component={Cadastros} />
        <Route path="/editar/:id" exact component={Editar} />
      </Switch>
    </BrowserRouter>
  );
}