import React, { useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import api from '../../../Services/api'

import logo from '../../../Assets/logo_menor.png';

import {
  Container,
  Logo,
  DivConteudo,
  DivID,
  DivUser,
  DivName,
  DivEmail,
  DivDepartment,
  DivSecurityLevel,
  BtnVoltar,

} from './styles'

export default function Detalhes(){
  const { id } = useParams();
  const [data, setData] = useState();
  let history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();  
  });

  async function loadData(){
    const response = await api.get(`/api/users/${id}`);
    setData(response.data); 
    setLoading(false);
  }

  return(
   <>
   {loading === false? (
     <Container>
     <Logo src={logo}/>
      <DivConteudo>
        <DivID>
          <span>Id: {data[0].Id}</span>
        </DivID>
        <DivUser>
          <span>User Id: {data[0].UserId} </span>
        </DivUser>
      </DivConteudo>
      <DivConteudo>
        <DivName>
          <span>Name: {data[0].Name} </span>
        </DivName>
      </DivConteudo>
      <DivConteudo>
        <DivEmail>
          <span>E-mail: {data[0].Email} </span>
        </DivEmail>
      </DivConteudo>
      <DivConteudo>
        <DivDepartment>
          <span>Departament: {data[0].Department} </span>
        </DivDepartment>
        <DivSecurityLevel>
          <span>Security Level: {data[0].SecurityLevel} </span>
        </DivSecurityLevel>
      </DivConteudo>
      <BtnVoltar onClick={() => history.push(`/dashboard_adm`)}  >
        Back
      </BtnVoltar>
   </Container>
   ): <h1>Carregando</h1>}
   </>
  );
}