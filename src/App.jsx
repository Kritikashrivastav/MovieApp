
import React, { useEffect, useState } from 'react'
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './assets/search.svg'
// c9a25603

const API_URL = 'http://www.omdbapi.com?apikey=c9a25603';

const movie1 = 
  {
    "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
    "Year": "2007",
    "imdbID": "tt1132238",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
      searchMovies('spiderman')
  },[])

  return (
    <div className='app'>
      <h1>PopcornPal</h1>

      <div className='search'>
      <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />

         <img 
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}/> 
      </div>

        {
          movies?.length > 0
          ? (
          <div className='container'>
            { movies.map ((movie) => (
              <MovieCard key={movie.imdbID} movie = {movie}/>
            ))}/
            </div>
            ) : (
              <div className='empty'>
                <h2>No Movie Found</h2>
                </div>
            )
        }

      
    </div>
  )
}

export default App
