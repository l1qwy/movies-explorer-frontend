import { useEffect, useState } from "react";
import MoreCards from "../moreCards/MoreCards";
import MoviesCard from "../moviesCard/MoviesCard";
import Preloader from "../preloader/Preloader";
import "./moviesCardList.css";
import { useLocation } from "react-router-dom";
import { DesktopDisplay, LaptopDisplay, MobileDisplay, MobileDisplayAddCard, TabletDisplay } from "../../utils/constants";

export default function MoviesCardList({
  movies,
  onSave,
  savedMovies,
  isLoading,
  isFailedLoad,
  onDelete,
}) {
  const { pathname } = useLocation();
  const [cardLimit, setCardLimit] = useState(0);
  const visibleCards = movies.slice(0, cardLimit);

  const handleLoadMore = () => {
    if (MobileDisplayAddCard) {
      setCardLimit((prevCardLimit) => prevCardLimit + 2);
    } else {
      setCardLimit((prevCardLimit) => prevCardLimit + 3);
    }
  };

  useEffect(() => {
    if (pathname === "/movies") {
      const handleResize = () => {
        if (DesktopDisplay) {
          setCardLimit(12);
        } else if (LaptopDisplay) {
          setCardLimit(12);
        } else if (TabletDisplay) {
          setCardLimit(8);
        } else if (MobileDisplay) {
          setCardLimit(5);
        } 
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [pathname]);


  return (
    <section>
      <div
        className={
          movies.length !== 0
            ? "movies-cardList-container"
            : "movies-cardlist-empty"
        }
      >
        {isLoading ? (
          <Preloader />
        ) : pathname === "/movies" && visibleCards.length !== 0 ? (
          visibleCards.map((data) => {
            return (
              <article key={data.id}>
                <MoviesCard
                  data={data}
                  savedMovies={savedMovies}
                  onSave={onSave}
                />
              </article>
            );
          })
        ) : movies.length !== 0 ? (
          movies.map((data) => {
            return (
              <article key={data._id}>
                <MoviesCard data={data} onDelete={onDelete} />
              </article>
            );
          })
        ) : isFailedLoad ? (
          <span>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </span>
        ) : pathname === "/movies" ? (
          <span>Введите ключевое слово для поиска</span>
        ) : (
          "Нет сохраненных фильмов"
        )}
      </div>
      <MoreCards
        onLoadMore={handleLoadMore}
        movies={movies}
        cardLimit={cardLimit}
      />
    </section>
  );
}
