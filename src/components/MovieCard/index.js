import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
    const {movieDetails} = props
    const {title, voteAverage, posterPath, id} = movieDetails
    const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`
    const rating = voteAverage.toFixed(1)
    return(
        <Link to = {`/movie/${id}`}>
        <li className='list-item'>
            <img className='poster' src={imageUrl} alt={title} />
            <p>{title}</p>
            <p>Rating: {rating}</p>
        </li>
        </Link>
    )
}

export default MovieCard