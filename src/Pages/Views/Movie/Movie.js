import React, {useContext} from "react";
import MovieCard from "../../../Components/MovieCard/MovieCard";
import AppContext from "../../../Context/AppContext";
const Movie = ()=>{

    const {state} = useContext(AppContext)

    const {movieSelected} = state
    console.log(movieSelected);

    return (
        <div>
            <MovieCard 
                id={movieSelected.id}
                title={movieSelected.title}
                synopsys={movieSelected.synopsys }
                cover={movieSelected.cover}
            />
            
        </div>
    )
}
export default Movie;