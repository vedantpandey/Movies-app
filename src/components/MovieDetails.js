import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/w1280";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=3ab80a6e6122c5d754d04b6de4183f1f`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, []);

  return (
    <div className="movie-details">
      <Link to="/" className="link">
        Back Home
      </Link>
      <h2 className="title">{movie.title}</h2>

      <img src={base_url + movie.poster_path} alt={movie.title} />
      <div className="movie-info">
        <p>
          <span className="movie-data">Plot : </span>
          {movie.overview}
        </p>
        <p>
          <span className="movie-data">Release date : </span>
          {movie.release_date}
        </p>
        <p>
          <span className="movie-data">Vote Average : </span>
          {movie.vote_average}
        </p>
      </div>
      <button>Watch Trailer</button>
    </div>
  );
}

export default MovieDetails;
