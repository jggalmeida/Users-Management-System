import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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

export default function Editar(){
  let history = useHistory();
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [nome, setNome] = useState()
  const [departamento, setDepartamento] = useState()


  useEffect(() => {
    loadData();  
  },[]);

  async function loadData(){
    const response = await api.get(`/api/users/${id}`);
    setData(response.data); 
    console.log(response.data);
    setLoading(false);
  }


  function handleSubmit({email, password, nome, departament}){
    var pass = data[0].Password;
    var e_mail = data[0].Email;
    var name = data[0].Name;
    var depart = data[0].Department;
    
    /*setEmail(data[0].Email);
    setSenha(data[0].Password);
    setNome(data[0].Name);
    setDepartamento(data[0].Department);*/
    console.log(email);
    if(password.length > 0 ){
      pass = password;
      //setSenha(password);
      //console.log('oi');
    }
    if(email.length > 0){
      e_mail = email;
      //setEmail(email);
      //console.log(email);
    }
    if(nome.length > 0){
      name = nome;
      //setNome(nome);
    }
    if(departament.length > 0){
      depart = departament;
      //setDepartamento(departament);
    }
    console.log(pass);
    AtualizaDados(pass, e_mail, name, depart);
  }

  async function AtualizaDados(pass, e_mail, name, depart){

    const response = await api.put(`/api/users/${id}`, {
      Password: pass,
      Email: e_mail,
      Name: name,
      Department: depart
    })
    if(response.status === 200){
      alert("User updated succesfully");
      history.push('/dashboard_adm')

    }
  }
  return(
    <>
    {
      loading === false ? (
        <Container>
          <Logo src={logo} />
          <DivForm>
            <Form onSubmit={handleSubmit}>
              <TextInput>Password: </TextInput>
              <Input name="password" type="password" placeholder={data[0].Password}/>

              <TextInput>E-mail : </TextInput>
              <Input name="email" placeholder={data[0].Email} type="email"/>

              <TextInput>Name: </TextInput>
              <Input name="nome" placeholder={data[0].Name} type="text"/>
              
              <TextInput>Departament: </TextInput>
              <Input name="departament" placeholder={data[0].Department} type="text"/>

              <button type="submit">Update User</button>
              <BtnVoltar onClick={() => history.push(`/dashboard_adm`)}  >
                Back
              </BtnVoltar>
            </Form>
          </DivForm>
        </Container>
      ) : <h1>Carregando</h1>
    }
    </>
  );
}