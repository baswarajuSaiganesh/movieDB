import {useState, useEffect} from 'react'

import MovieCard from '../MovieCard'
//import SearchContext from '../../context/SearchContext'

import './index.css'

const SearchMoviePage = props => {
    const [searchMoviesList, setSearchMoviesList] = useState([])

    useEffect(() => {
        const getSearchMovieDetails = async () => { 
            const {searchInput} = props
            const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchInput}&page=1`
            const options = {
              method: 'GET',
            }
            const response = await fetch(url, options)
            const data = await response.json()
            const searchMoviesDetails = data.results.map(eachMovie => ({
                id: eachMovie.id,
                title: eachMovie.title,
                voteAverage: eachMovie.vote_average,
                posterPath: eachMovie.poster_path,
              }))
          
              setSearchMoviesList(searchMoviesDetails)
        }
        getSearchMovieDetails()
    })

    return ( 
        <ul className='movies-list-container'>
        {searchMoviesList.map(eachMovie => (
            <MovieCard key = {eachMovie.id} movieDetails={eachMovie} />
        ))}
       </ul>

    )
}

export default SearchMoviePage