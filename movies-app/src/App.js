import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3b48dbd14d25d9323dfacec549beb683&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=3b48dbd14d25d9323dfacec549beb683&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((responseMovies) => responseMovies.json())
      .then((moviesJson) => {
        console.log(moviesJson);
        setMovies(moviesJson.results);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + searchTerm)
      .then((responseMovies) => responseMovies.json())
      .then((moviesJson) => {
        console.log(moviesJson);
        setMovies(moviesJson.results);
      });

    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
