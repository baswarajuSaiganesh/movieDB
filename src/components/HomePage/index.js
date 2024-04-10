import {useState, useEffect} from 'react'

import MovieCard from '../MovieCard'

import './index.css'

const HomePage = () => {
    const [popularMoviesList, setPopularMoviesList] = useState([])
    
    
    
    useEffect(() => {
        const getPopularMovieDetails = async () => {
            const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
            const options = {
              method: 'GET',
            }
            const response = await fetch(url, options)
            const data = await response.json()
            const popularMoviesDetails = data.results.map(eachMovie => ({
              id: eachMovie.id,
              title: eachMovie.title,
              voteAverage: eachMovie.vote_average,
              posterPath: eachMovie.poster_path,
            }))
        
            setPopularMoviesList(popularMoviesDetails)

          }
        getPopularMovieDetails()
    })

    

    
    return (
      <ul className='movies-list-container'>
      {popularMoviesList.map(eachMovie => (
      <MovieCard key = {eachMovie.id} movieDetails={eachMovie} />
      ))}
      </ul>
    )


    
}

export default HomePage