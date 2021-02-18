import React, { useContext } from 'react';
import AuthContext from '../../Context/Auth';
import logo from '../../Assets/logo.png';

import { Form, Input } from '@rocketseat/unform';

import {
  Container,
  Logo,
  DivForm,
  TextInput
} from './styles'

export default function Login(){
  const { AuthLogin } = useContext(AuthContext);

  function handleSubmit({usuario, password}){
    AuthLogin({usuario, password});
    
  }

  return(
    <Container>
      <Logo src={logo} />
      <DivForm>
        <Form onSubmit={handleSubmit}>
          <TextInput>User Id: </TextInput>
          <Input name="usuario" placeholder="Insert User Id" type="text"/>
        
          <TextInput>Password: </TextInput>
          <Input name="password" placeholder="Insert Password" type="password"/>

          <button type="submit" >Sign In</button>
        </Form>    
      </DivForm>   
    </Container>
  )
}