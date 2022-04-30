import React, {useContext} from "react";
import AppContext from "../../Context/AppContext";
import LoginComponent from "../../Components/Log_in/Log_in";
import Registration from "../../Components/Registry/Registration";


import styles from "./Login.module.css";

const Login = ()=>{

    const {state, dispatch} = useContext(AppContext)

    const showHandler=(arg)=>{
        if(arg === "login"){
            dispatch({type: "LOGIN", payload: true})
        }
        else if(arg === "register"){
            dispatch({type: "REGISTRATION", payload: true})
        }         

    }

    return (
        <main className={styles.main}>
            <article className={styles.article}>
                <div className={styles.titleContainer}>
                    <section className={styles.titleSection}>
                        <h1 className={styles.title}>Next-Flick</h1>
                    </section>
                    <section className={styles.buttonContainer}>
                        <button onClick={()=> showHandler("login")} 
                            className={styles.loginButton}
                           >Log in</button>
                        <button onClick={()=> showHandler("register")} 
                            className={styles.registryButton}
                            >Register</button>
                    </section>
                    
                </div>
                <div className={styles.showFormContainer}>
                    {state.login && <LoginComponent/>}
                    {state.register && <Registration/>}
                </div>
            </article>
        </main>
    )
}

export default Login;