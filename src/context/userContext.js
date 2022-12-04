import {  createContext, useContext ,useState} from 'react';
import { instance } from '../app/instance';
import {useNavigate} from "react-router-dom";
import { checkTokenValidity, getUser } from '../app/util';

export const userContext = createContext();



export const UserContextProvider =({children}) => {
    const [userData, setUserData] =useState(() => {
        return !checkTokenValidity() ? getUser() : null;
    });

    const navigate = useNavigate();

    const registerOrLogin = async(formValues, isLogin)=> {
        const route =`users/${isLogin ? 'login' : 'register'}`;
        try {
            const {data} = await instance.post(route, formValues);
            localStorage.setItem("token", data.token);
            localStorage.setItem("refresh-token", data.refreshToken);
            setUserData(data.user);
            navigate(`/profile/${data.user.firstName}/`, {
                state: { id:data.user._id },
            });
        } catch (error ) {
           
        };
    };

    const logout =() =>{
        setUserData(null);
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
    }

    return <userContext.Provider value={{registerOrLogin, userData, logout}}>
        {children}
    </userContext.Provider>
}