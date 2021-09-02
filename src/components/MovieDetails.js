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
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="left-part">
          <h2 className="title">{movie.title}</h2>

          <img src={base_url + movie.poster_path} alt={movie.title} />
          <p style={{ fontDecoration: "italics" }}>{movie.tagline}</p>
        </div>
        <div className="movie-info right-part">
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
        <button className="btn">Watch Trailer</button>
        <Link to="/" className="link">
          Back Home
        </Link>
        <Link to="/favourites" className="link">
          Back to Favourites
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;
