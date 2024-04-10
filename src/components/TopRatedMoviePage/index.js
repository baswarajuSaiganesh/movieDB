import {useState, useEffect} from 'react'

import MovieCard from '../MovieCard'

import './index.css'

const TopRatedMoviePage = () => {
    const [topRatedMoviesList, setTopRatedMoviesList] = useState([])
    
    
    
    useEffect(() => {
        const getTopRatedMovieDetails = async () => {
            const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
            const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
            const options = {
              method: 'GET',
            }
            const response = await fetch(url, options)
            const data = await response.json()
            const topRatedMoviesDetails = data.results.map(eachMovie => ({
              id: eachMovie.id,
              title: eachMovie.title,
              voteAverage: eachMovie.vote_average,
              posterPath: eachMovie.poster_path,
            }))
        
            setTopRatedMoviesList(topRatedMoviesDetails)
          }
        getTopRatedMovieDetails()
        
    })

    

    
    return (
       <ul className='movies-list-container'>
        {topRatedMoviesList.map(eachMovie => (
            <MovieCard key = {eachMovie.id} movieDetails={eachMovie} />
        ))}
       </ul>
    )


    
}

export default TopRatedMoviePage