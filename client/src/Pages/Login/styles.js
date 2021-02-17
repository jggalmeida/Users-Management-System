import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #FFEEEE;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  margin-left: 30%;
  margin-top: 5%;
`;

export const DivForm = styled.div`
  flex: 1;
  margin-top: 5%;
  margin-left: 35%;
  width: 30%;

  Form{
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.8);
  }

  Input{
    color: rgba(0, 0, 0, 0.8);
    margin-left: 10%;
    margin-top: 3%;
    background: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 10px;
    height: 40px;
    width: 80%;
    padding-left: 10px;
      &::placeholder{
          color: rgba(0, 0, 0, 0.5);
      }
  }
  button{
      border: 0;
      height: 40px;
      width: 30%;
      background: #EE4131;
      margin-left: 35%;
      margin-top: 7%;
      border-radius: 10px;
      font-size: 16px;
      font-weight: bold;
      color: #FFF;
      transition: background 0.3s;
      &:hover{
          background: ${darken(0.05, `#EE4131`)}
      }
  }
  a{
    color: #EE4131;
    margin-top: 8%;
    opacity: 0.6;
    margin-left: 35.5%;
    font-size: 16px;
    transition: opacity 0.3s;
    &:hover{
        opacity: 1;
    }
  }

`;

export const TextInput = styled.h1`
  margin-left: 6%;
  font-size: 26px;
`;