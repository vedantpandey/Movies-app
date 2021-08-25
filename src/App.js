import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import FavouriteList from "./components/FavouriteList";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const FEATURED_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=3ab80a6e6122c5d754d04b6de4183f1f&language=en-US&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3ab80a6e6122c5d754d04b6de4183f1f&query=";
const topRated_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=3ab80a6e6122c5d754d04b6de4183f1f&language=en-US&page=1";

function App() {
  const [movies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
    getTopRatedMovies(topRated_API);
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    setFavourites(movieFavourites);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  };

  const getTopRatedMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setTopRatedMovies(data.results);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    } else {
      getMovies(FEATURED_API);
    }
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id != movie.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/" className="link">
            <h2>MovieApp</h2>
          </Link>
          <nav>
            <Link to="/" className="link">
              All Movies
            </Link>
            <Link to="/topRated" className="link">
              Top Rated
            </Link>
            <Link to="/favourites" className="link">
              Favourites
            </Link>
          </nav>
          <form onSubmit={submitHandler}>
            <input
              className="search"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </header>

        <Switch>
          <Route exact path="/">
            <MovieList movies={movies} addFavouriteMovie={addFavouriteMovie} />
          </Route>
          <Route path="/topRated">
            <MovieList
              movies={topRatedMovies}
              addFavouriteMovie={addFavouriteMovie}
            />
          </Route>
          <Route path="/favourites">
            <FavouriteList
              movies={favourites}
              removeFavouriteMovie={removeFavouriteMovie}
            />
          </Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
//API KEY - 3ab80a6e6122c5d754d04b6de4183f1f
