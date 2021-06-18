import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3b48dbd14d25d9323dfacec549beb683&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=3b48dbd14d25d9323dfacec549beb683&query=";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((responseMovies) => responseMovies.json())
      .then((moviesJson) => {
        console.log(moviesJson);
        setMovies(moviesJson.results);
      });
  }, []);

  return <div>{movies.length > 0 && movies.map((movie) => <Movie />)}</div>;
}

export default App;
