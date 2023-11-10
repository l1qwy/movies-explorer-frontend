import Header from "../header/Header";
import SearchForm from "../searchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import Footer from "../footer/Footer";
import "./savedMovies.css";
import { useCallback, useEffect, useState } from "react";

export default function SavedMovies({ onDelete, savedMovies, setIsSuccessfully }) {


  const [sortingMovies, setSortingMovies] = useState(savedMovies);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCheckShots, setIsCheckShorts] = useState(false);

  const filter = useCallback((search, isCheckShots, movies) => {
    setSearchQuery(search);
    setSortingMovies(
      movies.filter((movie) => {
        const searchName = movie.nameRU
          .toLowerCase()
          .includes(search.toLowerCase());
        return isCheckShots ? searchName && movie.duration <= 40 : searchName;
      })
    );
  }, []);

  function searchMovies(search) {
    filter(search, isCheckShots, savedMovies);
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setIsSuccessfully(true)
    } else {
      setIsSuccessfully(false)
    }
    filter(searchQuery, isCheckShots, savedMovies)
  }, [savedMovies, filter, isCheckShots, searchQuery, setIsSuccessfully]);

  function sortingShorts() {
    if (isCheckShots) {
      setIsCheckShorts(false);
      filter(searchQuery, false, savedMovies);
    } else {
      setIsCheckShorts(true);
      filter(searchQuery, true, savedMovies);
    }
  }

  return (
    <section className="saved-movies">
      <Header />
      <main className="main">
        <SearchForm
          isCheckShots={isCheckShots}
          searchMovies={searchMovies}
          searchQuery={searchQuery}
          sortingShorts={sortingShorts}
          savedMovies={savedMovies}
        />
        <MoviesCardList
          movies={sortingMovies}
          onDelete={onDelete}
        />
      </main>
      <Footer />
    </section>
  );
}
