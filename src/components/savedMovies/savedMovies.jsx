import Header from "../header/Header";
import SearchForm from "../searchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import Footer from "../footer/Footer";
import MoreCards from "../moreCards/MoreCards";
import "./savedMovies.css"
import { useState } from "react";

export default function SavedMovies({ cards }) {
  const [cardLimit, setCardLimit] = useState(12);
  const visibleCards = cards.slice(0, cardLimit);
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const filteredFilms = isChecked
    ? cards.filter((film) => film.duration < 41)
    : cards;

  return (
    <section className="savedMovies">
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
