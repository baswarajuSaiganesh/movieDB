import {useState, useEffect} from 'react'

import MovieCard from '../MovieCard'

import './index.css'

const UpComingMoviePage = () => {
    const [upComingMoviesList, setUpComingMoviesList] = useState([])
    
    
    
    useEffect(() => {
        const getUpComingMovieDetails = async () => {
            const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
            const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
            const options = {
              method: 'GET',
            }
            const response = await fetch(url, options)
            const data = await response.json()
            const upComingMoviesDetails = data.results.map(eachMovie => ({
              id: eachMovie.id,
              title: eachMovie.title,
              voteAverage: eachMovie.vote_average,
              posterPath: eachMovie.poster_path,
            }))
        
            setUpComingMoviesList(upComingMoviesDetails)
          }
        getUpComingMovieDetails()
        
    },[upComingMoviesList])

    

    
    return (
       <ul className='movies-list-container'>
        {upComingMoviesList.map(eachMovie => (
            <MovieCard key = {eachMovie.id} movieDetails={eachMovie} />
        ))}
       </ul>
    )


    
}

export default UpComingMoviePage