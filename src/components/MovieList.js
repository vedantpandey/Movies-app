import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

function MovieList({ movies, addFavouriteMovie }) {
  return (
    <div className="movielist">
      <div className="movie-container">
        {movies.map((movie) => (
          <div>
            <Link to={`/movie/${movie.id}`} key={movie.id} className="link">
              <Movie key={movie.id} {...movie} />
            </Link>
            <button onClick={() => addFavouriteMovie(movie)}>
              Add to Favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
