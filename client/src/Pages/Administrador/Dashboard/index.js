import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../Services/api';
import AuthContext from '../../../Context/Auth';

import logo from '../../../Assets/logo_menor.png';

import {
  Container,
  Logo,
  DivItens,
  BtnAddPerson,
  BtnRemovePerson,
  BtnEditPerson,
  BtnSeeMorePerson,
  BtnLogOut

} from './styles'


export default function Dashboard(){
  const { SignOut } = useContext(AuthContext);
  let history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();  
  }, []);

  async function loadData(){
    const response = await api.get('/api/users');
    setData(response.data); 
  }

  async function removeUser(ID){
     const response = await api.delete(`/api/users/${ID}`);
     loadData();
  }

  return(
    <Container>
      <Logo src={logo} />
      <BtnAddPerson onClick={() => history.push('/cadastros')}>
        Add +
      </BtnAddPerson>
      <BtnLogOut onClick={() => SignOut()}>
        LogOut
      </BtnLogOut>
        <ul>
          {
            data.map(dados => (
              <DivItens>
               <div>
               <li key={dados.Id}>
                  <strong>Name: {dados.Name}</strong> <br/>
                  <strong>User Id: {dados.UserId}</strong> <br/>
                  <strong>E-mail: {dados.Email}</strong><br/>
                  <strong>Department: {dados.Department}</strong> <br/>
                  <strong>Security Level: {dados.SecurityLevel}</strong>
                </li>
               </div>
               <div>
                 <BtnRemovePerson onClick={() => removeUser(dados.Id)}>Remove User</BtnRemovePerson>
                 <BtnEditPerson onClick={() => history.push(`/editar/${dados.Id}`)}  >Edit User</BtnEditPerson>
                 <BtnSeeMorePerson onClick={() => history.push(`/detalhes/${dados.Id}`)} >User Info</BtnSeeMorePerson>
               </div>
              </DivItens> 
            ))
          }
        </ul>
    </Container>
  );
}