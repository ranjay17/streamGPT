import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () =>{
    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);
    const dispatch = useDispatch();
    // fetch data from TMDB API and update store
    const getUpcomingMovies = async() =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
        if(!upcomingMovies){
        getUpcomingMovies()
        }
    },[]);
    }
   

export default useUpcomingMovies;