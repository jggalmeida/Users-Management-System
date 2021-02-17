import React from 'react';
import { Router } from 'react-router-dom'
import GlobalStyle from './styles';

import Routes from './Routes/routes';
import history from './Services/history';

import {AuthProvider} from './Context/Auth';

function App() {
  return (
    <AuthProvider>
      <Router history={history} >
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthProvider> 
  );
}

export default App;