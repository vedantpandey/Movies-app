import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

function FavouriteList({ movies, removeFavouriteMovie }) {
  return (
    <div className="movielist">
      <div className="movie-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div>
              <Link to={`/movie/${movie.id}`} key={movie.id} className="link">
                <Movie key={movie.id} {...movie} />
              </Link>
              <button onClick={() => removeFavouriteMovie(movie)}>
                Remove from Favourites
              </button>
            </div>
          ))
        ) : (
          <p>No movies in list!</p>
        )}
      </div>
    </div>
  );
}

export default FavouriteList;
