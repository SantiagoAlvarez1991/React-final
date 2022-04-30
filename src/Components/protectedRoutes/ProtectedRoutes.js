import React, {useContext} from "react";
import { Outlet, Navigate } from "react-router-dom";
import AppContext from "../../Context/AppContext";

export const ProtectedRoutes = ()=>{

    const {state} = useContext(AppContext)

    if(state.isLogged){
        return <Outlet/>
    }
    else{
        return <Navigate to="/access-registration"/>
    }
}