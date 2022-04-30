import React,{useState, useContext} from "react";
import styles from "./LoginComponent.module.css";
import mainStyles from "../../Pages/Login/Login.module.css";
import AppContext from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const LoginComponent = ()=>{

    const {state, dispatch} = useContext(AppContext)

    const {user} = state

    const [newUser,setNewUser] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate();

    const validationHandler =(e)=>{
        e.preventDefault();
        if(user.username === newUser.username && user.password === newUser.password){
            dispatch({
                type: "LOGGININ"
            })
            navigate("/home")
        }

    }

    return (
        <main className={styles.main}>
            <form onSubmit={validationHandler}
                className={styles.form}
                >
                <input onChange={(e)=> setNewUser({...newUser, username: e.target.value})} placeholder="username"/>
                <input onChange={(e)=> setNewUser({...newUser, password: e.target.value})} placeholder="password" type="password"/> 
                <div>
                    <button className={mainStyles.loginButton}>Log in</button>
                </div>
            </form>
        </main>
    )
}

export default LoginComponent;