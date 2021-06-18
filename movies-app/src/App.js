import React from "react";
import Movie from "./components/Movie";

/* "https://api.themoviedb.org/3/movie/550?api_key=3b48dbd14d25d9323dfacec549beb683" */
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3b48dbd14d25d9323dfacec549beb683";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=3b48dbd14d25d9323dfacec549beb683&query=";

const IMG_API = "https://images.tmdb.org/t/p/w1280";

function App() {
  const movies = ["1", "2", "3"];
  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
