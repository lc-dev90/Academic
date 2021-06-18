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
    fetchData(FEATURED_API);
  }, []);

  const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchData(SEARCH_API + searchTerm);
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
