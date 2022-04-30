import React, {useContext} from "react";
import styles from "./Home.module.css";
import AppContext from "../../../Context/AppContext";
import MovieCard from "../../../Components/MovieCard/MovieCard";

const Home = ()=>{

    const {state} = useContext(AppContext);


    return (
        <div>
            <section className={styles.welcomeHeader}>
                <aside>
                    <h2 className={styles.welcome}>
                        Welcome back, "User"
                    </h2>
                </aside>
                
                <aside>
                    <form className={styles.form}>
                        <input 
                            placeholder="What to watch?"
                            type="text"
                        />
                        <button className={styles.searchButton}><i className="fa fa-search"></i></button>
                    </form>
                </aside>
            </section>
            <section className={styles.sectionCards}>
                {
                    state.movies.map(movie =>
                        <MovieCard
                        key={movie.id}
                        id = {movie.id}
                        title = {movie.movie_title}
                        synopsys = {movie.synopsys}
                        cover = {movie.movie_cover} 
                        />
                        )
                }
            </section>
        </div>
    )
}

export default Home;