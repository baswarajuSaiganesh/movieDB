import { Container } from "./styledComponents"

const SingleMovieDetailsCard = props => {
    const {movieDetails} = props
    const {title, posterPath, backdropPath, voteAverage, runtime, releaseDate, overview} = movieDetails
    
    const imageUrl1 = `https://image.tmdb.org/t/p/w500${backdropPath}`
    const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`

    return(
        <Container backgroundimage={imageUrl1}>
            <div>
            <img src={imageUrl} alt ={title} />
            <div>
                <h1>{title}</h1>
                <p>Rating: {voteAverage}</p>
                <p>{runtime}</p>
                <p>Release Date: {releaseDate}</p>
            </div>
            </div>
            <h1>Overview</h1>
            <p>{overview}</p>
        </Container>
    )
}

export default SingleMovieDetailsCard