const CastDetailsCard = props => {
    const {details} = props 
    const {character, originalName, profilePath} = details
    const imageUrl = `https://image.tmdb.org/t/p/w500${profilePath}`
    return(
        <li>
            <img src={imageUrl} alt = {character} />
            <p>{character}</p>
            <p>{originalName}</p>
        </li>
    )
}

export default CastDetailsCard