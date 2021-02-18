import React, { createContext, useState } from 'react';
import api from '../Services/api';

const AuthContext = createContext({ signed: Boolean, tpUsuario: String, token: String, user: Object, AuthLogin: Function, SignOut: Function});

export function AuthProvider({children}){
    const [token, setToken] = useState(null); 
    const [tpUsuario, setTpUsuario] = useState(); 
    const [signed, setSigned] = useState(false);
    const [user, setUsers] = useState();


    async function AuthLogin(usuario, password){
       const user = usuario.usuario;
       const Pass = usuario.password;
        const response = await api.post('/login', {
            UserId: `${user}`,
            Password: `${Pass}`
        })
        setUsers(response.data);
        console.log(response.status);
        if(response.status === 200){
            setToken(response.data.token);
            setTpUsuario(response.data.SecurityLevel);
            setSigned(true);
        }else if(response.status === 204){
            alert("User or Password Incorrect");
        }
    }
      

    function SignOut(){
        setToken(null);
        setUsers({});
        setSigned(false);
        setTpUsuario('')
    }
    

    return (
        <AuthContext.Provider value={{ signed, tpUsuario, token, user, AuthLogin, SignOut}} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;