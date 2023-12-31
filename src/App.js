import React, {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com?apikey=4a3b711b';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]); // empty array


  useEffect(() => {
    searchMovies('Spider Man');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    //console.log(data);

    setMovies(data.Search);

  };

  return (
    <div className="app">
      <h1>Reel Roster</h1>
      <div className="search">
        <input
          value={searchTerm}
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon} 
        alt="search" 
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
          </div>
      ):(
        <div className='empty'>
          <h2>No movies found</h2>

        </div>
      )}
    </div>
  );
}

export default App;
