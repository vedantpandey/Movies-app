import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, overview, poster_path, vote_average }) {
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
        }
        alt={title}
      />
      {/* <div className="movie-info">
        <h3>{title}</h3>
        <p>{vote_average}</p>
      </div> */}
    </div>
  );
}

export default Movie;
