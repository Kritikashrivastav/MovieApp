import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <> 
    <div className='movie'>
        <div>
        <p>{movie.Year}</p>
        </div>

        <div>
        <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
        alt={movie.Title}/>
        </div>

        <div>
        <span>{movie.Type}</span>
        <h4>{movie.Title}</h4>
        </div>
    </div>
  </>
  )
}

export default MovieCard