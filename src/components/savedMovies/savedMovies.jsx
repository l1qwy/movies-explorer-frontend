import Header from "../header/Header";
import SearchForm from "../searchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import Footer from "../footer/Footer";
import MoreCards from "../moreCards/MoreCards";
import "./savedMovies.css"
import { useState } from "react";

export default function SavedMovies({ cards }) {
  const [cardLimit, setCardLimit] = useState(2);
  const visibleCards = cards.slice(0, cardLimit);

  const [isChecked, setIsChecked] = useState(false);
  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const filteredFilms = isChecked
    ? cards.filter((film) => film.duration < 41)
    : cards;

  return (
    <section className="saved-movies">
      <Header />
      <SearchForm
        isChecked={isChecked}
        handleSwitchChange={handleSwitchChange}
      />
      <MoviesCardList
        cards={cards}
        setCardLimit={setCardLimit}
        visibleCards={visibleCards}
        filteredFilms={filteredFilms}
        isChecked={isChecked}
        name="saved-movies"
      />
      <MoreCards
        cards={cards}
        setCardLimit={setCardLimit}
        cardLimit={cardLimit}
      />
      <Footer />
    </section>
  );
}
