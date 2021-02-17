import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../Services/api';

import logo from '../../../Assets/logo_menor.png';

import {
  Container,
  Logo,
  DivItens,
  BtnSeeMorePerson,

} from './styles'


export default function Dashboard(){
  let history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();  
  }, []);

  async function loadData(){
    const response = await api.get('/api/users');
    setData(response.data); 
  }

  return(
    <Container>
      <Logo src={logo} />
        <ul>
          {
            data.map(dados => (
              <DivItens>
               <div>
               <li key={dados.Id}>
                  <strong>Name: {dados.Name}</strong> <br/>
                  <strong>User Id: {dados.UserId}</strong> <br/>
                  <strong>E-mail: {dados.Email}</strong><br/>
                  <strong>Departament: {dados.Department}</strong> <br/>
                  <strong>Security Level: {dados.SecurityLevel}</strong>
                </li>
               </div>
               <div>
                 <BtnSeeMorePerson onClick={() => history.push(`/detalhes_users/${dados.Id}`)} >User Info</BtnSeeMorePerson>
               </div>
              </DivItens> 
            ))
          }
        </ul>
    </Container>
  );
}