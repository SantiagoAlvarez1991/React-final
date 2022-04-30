import { createContext, useReducer } from "react";
import { dataMovies } from "../Assets/Externals";

const AppContext = createContext();

const ReducerFn = (state, action)=>{
    switch (action.type) {
        case "LOGIN":
            return{
                ...state, 
                login: action.payload,
                register: false
            }
        case "REGISTRATION":
            return{
                ...state,
                register: action.payload,
                login : false
            }
        case "SHOW":
            return{
                ...state,
                show: true,
                movieSelected: action.payload
            }    
        case "REGISTERUSER":
            return{
                ...state,
                user: action.payload
            }
        case "LOGGININ":
            return{
                ...state,
                isLogged: true
            }
        default:
            return state;
    }
}

const AppContextProvider =({children})=>{
    
    const initialState = {
        isLogged: false,
        movies: dataMovies,
        show: false

    }

    const [state, dispatch] = useReducer(ReducerFn, initialState);
    const data = {
        state,
        dispatch
    }

    return(
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}

export{AppContextProvider};
export default AppContext;