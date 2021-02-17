import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #FFEEEE;
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