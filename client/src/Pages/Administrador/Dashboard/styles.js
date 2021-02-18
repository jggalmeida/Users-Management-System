import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #FFEEEE;
  height: 100%;
  ul{
    margin-top: 5%;
  }
`;

export const Logo = styled.img`
  margin-left: 3%;
  margin-top: 1%;
`;

export const DivItens = styled.div`
  background-color: #fff;
  width: 40%;
  margin-top: 1%;
  margin-left: 10%;
  border-radius: 10px;
  padding: 1%;
  flex-direction: row;
`;

export const BtnAddPerson = styled.button`
  border: 0;
  height: 40px;
  width: 10%;
  background: #1AB67E;
  margin-left: 35%;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  transition: background 0.3s;
    &:hover{
        background: ${darken(0.05, `#1AB67E`)}
    }
`;

export const  BtnEditPerson = styled.button`
  border: 0;
  height: 30px;
  width: 25%;
  background: #1AB67E;
  margin-left: 5%;
  margin-top: 1%;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  transition: background 0.3s;
    &:hover{
        background: ${darken(0.05, `#1AB67E`)}
    }
`;

export const BtnRemovePerson = styled.button`
  border: 0;
  height: 30px;
  width: 25%;
  background: #9F0707;
  margin-left: 5%;
  margin-top: 1%;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  transition: background 0.3s;
    &:hover{
        background: ${darken(0.05, `#9F0707`)}
    }
`;

export const BtnSeeMorePerson = styled.button`
  border: 0;
  height: 30px;
  width: 25%;
  background: #079F96;
  margin-left: 5%;
  margin-top: 1%;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  transition: background 0.3s;
    &:hover{
        background: ${darken(0.05, `#079F96`)}
    }
`;

export const BtnLogOut = styled.button`
  border: 0;
  height: 40px;
  width: 10%;
  background: #1AB67E;
  margin-left: 5%;
  margin-top: 2%;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  position: absolute;
  transition: background 0.3s;
    &:hover{
        background: ${darken(0.05, `#1AB67E`)}
    }
`;