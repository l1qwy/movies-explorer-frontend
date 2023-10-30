import Header from "../header/Header";
import SearchForm from "../searchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import Footer from "../footer/Footer";
import MoreCards from "../moreCards/MoreCards";
import "./savedMovies.css"
import { useEffect, useState } from "react";

export default function SavedMovies({ cards }) {

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 320) {
        setCardLimit(2); 
      } else if (screenWidth <= 768) {
        setCardLimit(3); 
      } else if (screenWidth <= 1024) {
        setCardLimit(3); 
      } else {
        setCardLimit(3);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [cardLimit, setCardLimit] = useState(3);
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
