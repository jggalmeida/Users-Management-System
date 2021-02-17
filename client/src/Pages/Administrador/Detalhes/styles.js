import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #FFEEEE;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  margin-left: 3%;
  margin-top: 1%;
  margin-bottom: 3%;
`;

export const DivConteudo = styled.div`
  margin-top: 3%;
`;

export const DivID = styled.div`
  background-color: rgba(255,255,255,1);
  width: 10%;
  height: 40px;
  border-radius: 20px;
  margin-left: 30%;
  padding-left: 25px;
  padding-top: 10px;
  position: absolute;
`;

export const DivUser = styled.div`
  background-color: rgba(255,255,255,1);
  width: 20%;
  height: 40px;
  border-radius: 20px;
  margin-left: 50%;
  padding-left: 25px;
  padding-top: 10px;
`;


export const DivName = styled.div`
  background-color: rgba(255,255,255,1);
  width: 40%;
  height: 40px;
  border-radius: 20px;
  margin-left: 30%;
  padding-left: 25px;
  padding-top: 10px;
`;

export const DivEmail = styled.div`
  background-color: rgba(255,255,255,1);
  width: 40%;
  height: 40px;
  border-radius: 20px;
  margin-left: 30%;
  padding-left: 25px;
  padding-top: 10px;
`;

export const DivDepartment = styled.div`
  background-color: rgba(255,255,255,1);
  width: 16%;
  height: 40px;
  border-radius: 20px;
  margin-left: 30%;
  padding-left: 25px;
  padding-top: 10px;
  position: absolute;
`;

export const DivSecurityLevel = styled.div`
  background-color: rgba(255,255,255,1);
  width: 20%;
  height: 40px;
  border-radius: 20px;
  margin-left: 50%;
  padding-left: 25px;
  padding-top: 10px;
  position: absolute;
`;

export const BtnVoltar = styled.button`
  border: 0;
  height: 40px;
  width: 10%;
  background: #1AB67E;
  margin-left: 43%;
  margin-top: 10%;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  transition: background 0.3s;
    &:hover{
        background: ${darken(0.05, `#1AB67E`)}
    }
`;