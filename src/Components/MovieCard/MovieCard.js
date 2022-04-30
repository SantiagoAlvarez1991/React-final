import React, {useContext} from "react";
import styles from "./MovieCard.module.css";
import AppContext from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, title, synopsys, cover})=>{

    const {state, dispatch} = useContext(AppContext)

    const navigate = useNavigate();

    const showHandler=()=>{
        const data = {id,title,synopsys,cover}
        dispatch({
            type: "SHOW",
            payload: data
        })
        navigate(`/home/movie/${id}`)
    }

    if(state.show){
        return(<div className={styles.wrapper}>
            <section className={styles.containerCoverSecond}>
                <img src={cover} alt="image_of_movie" className={styles.coverSecond}/>
                
            </section>
            <section className={styles.containerInformation}>
                <span className={styles.movieTitle}>{title}</span>
                <span className={styles.title}>Synopsys of the movie:</span>
                <p className={styles.info}>{synopsys}</p>
                <button className={styles.button}>Go Back</button>
            </section>
        </div>)
    }
    else{
        return (
            <div 
                className={styles.containerCover}
                onClick={()=>showHandler()}
                >
                <img 
                    src={cover} alt="image_of_movie"
                    className={styles.cover}
                    />
                <span className={styles.title}>{title}</span>
            </div>
        )
    }
    
       
  
       

}

export default MovieCard;