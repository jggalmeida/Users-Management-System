import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import AuthContext from '../Context/Auth';

import Auth from './App.Auth.routes';
import Administrator from './App.Adm.routes';
import Users from './APP.Users.routes';


export default function Routes(){
  const {signed, tpUsuario} = useContext(AuthContext);
  let history = useHistory();

  if(signed === true && tpUsuario === 'Administrator'){
    history.push("/dashboard_adm");
    return<Administrator/>
  }else if (signed === true && tpUsuario === 'User'){
    history.push("/dashboard_users");
    return <Users />
  }else{
    history.push("/");
    return <Auth />
  }

}