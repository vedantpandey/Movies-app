import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  return (
    <div className="movielist">
      <div className="movie-container">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="link">
            <Movie key={movie.id} {...movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
