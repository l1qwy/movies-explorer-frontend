import Header from "../header/Header";
import SearchForm from "../searchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import MoreCards from "../moreCards/MoreCards";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import "./movies.css"

export default function Movies({ cards }) {

  const [cardLimit, setCardLimit] = useState(6);
  const visibleCards = cards.slice(0, cardLimit);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 320) {
        setCardLimit(5); 
      } else if (screenWidth <= 768) {
        setCardLimit(8); 
      } else if (screenWidth <= 1024) {
        setCardLimit(12); 
      } else {
        setCardLimit(12);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="movies">
      <Header />
      <SearchForm
      />
      <MoviesCardList
        cards={cards}
        setCardLimit={setCardLimit}
        visibleCards={visibleCards}
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