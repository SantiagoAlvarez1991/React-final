import React from "react";
import styles from "../Log_in/LoginComponent.module.css";
import mainStyles from "../../Pages/Login/Login.module.css";
import { useRegister } from "./useRegister";

const Registration = ()=>{

    const {setUser,registrationHandler, user} = useRegister();

    return (
        <main className={styles.main}>
            <form onSubmit={registrationHandler}
                className={styles.form}
                >
                <input onChange={(e)=> setUser({...user, username: e.target.value}) } placeholder="username"/>
                <input onChange={(e)=> setUser({...user, email: e.target.value}) }placeholder="email address"/>
                <input onChange={(e)=> setUser({...user, password: e.target.value}) }placeholder="password"/> 
                
                <div>
                    <button className={mainStyles.registryButton}>Register</button>
                </div>
            </form>
        </main>
    )
}

export default Registration;