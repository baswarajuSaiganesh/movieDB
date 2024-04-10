import { useState, useEffect } from "react";

import SingleMovieDetailsCard from "../SingleMovieDetailsCard";

import './index.css'
import CastDetailsCard from "../CastDetailsCard";

const SingleMovieDetailPage = (props) => {
    const [singleMovieDetails, setSingleMovieDetails] = useState([])
    const [castDetails, setCastDetails] = useState([])

    useEffect(() => {
        const getMovieDetails = async () => {
            const {match} = props
            const {params} = match
            const {id} = params
            const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
            const options = {
                method: 'GET',
            }
            const response = await fetch(url, options)
            const data = await response.json()
            const movieDetails = {
                title: data.title,
                posterPath: data.poster_path,
                backdropPath: data.backdrop_path,
                voteAverage: data.vote_average,
                runtime: data.runtime,
                genres: data.genres.map(each => ({
                  id: each.id,
                  name: each.name,
                })),
                releaseDate: data.release_date,
                overview: data.overview,
            } 
            setSingleMovieDetails(movieDetails)           
        }
        getMovieDetails()
    },[])

    useEffect(() => {
        const getCastDetails = async () => {
            const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
            const {match} = props
            const {params} = match
            const {id} = params
            const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
            const options = {
                method: 'GET',
            }
            const response = await fetch(url, options)
            const data = await response.json()
            const castDetails = data.cast.map(each => ({
                character: each.character,
                originalName: each.original_name,
                profilePath: each.profile_path,
                id: each.id
            }))
            setCastDetails(castDetails)
        } 
        getCastDetails()
    },[castDetails])

    return(
        <div>
            <SingleMovieDetailsCard movieDetails={singleMovieDetails} />
            <h1>Cast</h1>
            <ul>
            {castDetails.map(each => <CastDetailsCard key = {each.id} details={each} />)}
            </ul>
        </div>
    )
}

    



export default SingleMovieDetailPage