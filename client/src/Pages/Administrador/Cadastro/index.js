import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../Services/api';

import logo from '../../../Assets/logo_menor.png';

import {
  Container,
  Logo,
  DivForm,
  TextInput,
  BtnVoltar,

} from './styles'

export default function Cadastro(){
  let history = useHistory();


  async function handleSubmit({user, password, repeatpassword, email, nome,  departament}){

    if(password === repeatpassword){
      const response = await api.post('/api/users', {
        UserId: `${user}`,
        Password: `${password}`,
        Email: `${email}`,
        Name: `${nome}`,
        Department: `${departament}`
      });
      if(response.status === 200){
      alert("User created succesfully");
      history.push('/dashboard_adm')
      }
    }else{
      alert("Password Incorrect, try again");
    }
    
  }

  return(
    <Container>
      <Logo src={logo} />
      <DivForm>
        <Form onSubmit={handleSubmit}>
          <TextInput>User Id: </TextInput>
          <Input name="user" placeholder="Insert User Id" type="text"/>
        
          <TextInput>Password: </TextInput>
          <Input name="password" placeholder="Insert Password" type="password"/>

          <TextInput>Repeat Password: </TextInput>
          <Input name="repeatpassword" placeholder="Repeat Password" type="password"/>
          
          <TextInput>E-mail : </TextInput>
          <Input name="email" placeholder="Insert E-mail" type="email"/>

          <TextInput>Name: </TextInput>
          <Input name="nome" placeholder="Insert Name" type="text"/>
          
          <TextInput>Departament: </TextInput>
          <Input name="departament" placeholder="Insert Department" type="text"/>

          <button type="submit">Create</button>

        </Form>
        <BtnVoltar onClick={() => history.push(`/dashboard_adm`)}  >
        Back
      </BtnVoltar>
      </DivForm>
    </Container>
  );
}