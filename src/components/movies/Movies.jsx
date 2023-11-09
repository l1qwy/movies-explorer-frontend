import Header from "../header/Header";
import SearchForm from "../searchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import Footer from "../footer/Footer";
import { useCallback, useEffect, useState } from "react";
import "./movies.css";
import moviesApi from "../../utils/moviesApi";
import { timeToShorth } from "../../utils/constants";

export default function Movies({
  saveMovie,
  savedMovies,
  onSave,
  isLoading,
  setIsLoading
}) {
  const [allMovies, setAllmovies] = useState([]);
  const [sortingMovies, setSortingMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCheckShots, setIsCheckShorts] = useState(false);
  const [isFailedLoad, setIsFailedLoad] = useState(false);

  const sorting = useCallback((search, isCheckShots, movies) => {
    localStorage.setItem("movie", JSON.stringify(search));
    localStorage.setItem("shorts", JSON.stringify(isCheckShots));
    localStorage.setItem("allmovies", JSON.stringify(movies));
    setSearchQuery(search);
    setSortingMovies(
      movies.filter((movie) => {
        const searchName = movie.nameRU
          .toLowerCase()
          .includes(search.toLowerCase());
        return isCheckShots ? searchName && movie.duration <= timeToShorth : searchName;
      })
    );
  }, []);

  function searchMovies(search) {
    if (allMovies.length === 0) {
      setIsLoading(true)
      moviesApi
        .getServerMovies()
        .then((res) => {
          setAllmovies(res);
          setIsCheckShorts(false);
          setIsFailedLoad(false);
          sorting(search, isCheckShots, res);
        })
        .catch((error) => {
          setIsFailedLoad(true);
          console.error(`Ошибка при выполнении поиска фильмов ${error}`);
        })
        .finally(() => setIsLoading(false));
    } else {
      sorting(search, isCheckShots, allMovies);
    }
  }

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies);
      const search = JSON.parse(localStorage.movie);
      const isCheckShots = JSON.parse(localStorage.shorts);
      setIsFailedLoad(false);
      setSearchQuery(search);
      setIsCheckShorts(isCheckShots);
      setAllmovies(movies);
      sorting(search, isCheckShots, movies);
    }
  }, [sorting]);

  function sortingShorts() {
    if (isCheckShots) {
      setIsCheckShorts(false);
      sorting(searchQuery, false, allMovies);
    } else {
      setIsCheckShorts(true);
      sorting(searchQuery, true, allMovies);
    }
  }

  return (
    <div className="movies">
      <Header />
      <main>
        <SearchForm
          searchMovies={searchMovies}
          isCheckShots={isCheckShots}
          sortingShorts={sortingShorts}
          searchQuery={searchQuery}
          savedMovies={savedMovies}
        />
        <MoviesCardList
          movies={sortingMovies}
          saveMovie={saveMovie}
          savedMovies={savedMovies}
          isLoading={isLoading}
          isFailedLoad={isFailedLoad}
          onSave={onSave}
        />
      </main>
      <Footer />
    </div>
  );
}
