import {useContext, useState} from "react";
import AppContext from "../../Context/AppContext";

export const useRegister = ()=>{
    const [user,setUser] = useState({username: "", email: "", password: ""})

    const {state, dispatch} = useContext(AppContext);

    const registrationHandler=(e)=>{
        e.preventDefault();

        dispatch({
            type: "REGISTERUSER",
            payload: user
        })

    }

    return{
        setUser, registrationHandler, user

    }
} 

