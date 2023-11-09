import { useEffect, useState } from "react";
import MoreCards from "../moreCards/MoreCards";
import MoviesCard from "../moviesCard/MoviesCard";
import Preloader from "../preloader/Preloader";
import "./moviesCardList.css";
import { useLocation } from "react-router-dom";
import {
  ScreenDesktop,
  ScreenLaptop,
  ScreenPad,
  ScreenMobile,
  setMoreScreenDesktop,
  setWithScreenDesktop,
  setWithScreenLaptop,
  setWithScreenPad,
  setWithScreenMobile,
  getMoreScreenDesktop,
  getWithScreenDesktop,
  getWithScreenLaptop,
  getWithScreenPad,
  getWithScreenMobile,
} from "../../utils/constants";

export default function MoviesCardList({
  movies,
  onSave,
  savedMovies,
  isLoading,
  isFailedLoad,
  onDelete,
}) {
  const { pathname } = useLocation();
  const [cardLimit, setCardLimit] = useState("");
  const visibleCards = movies.slice(0, cardLimit);

  const cardsRender = () => {
    const quantity = { set: setMoreScreenDesktop, get: getMoreScreenDesktop };
    if (window.innerWidth <= ScreenDesktop) {
      quantity.set = setWithScreenDesktop;
      quantity.get = getWithScreenLaptop;
    }
    if (window.innerWidth < ScreenLaptop) {
      quantity.set = setWithScreenLaptop;
      quantity.get = getWithScreenLaptop;
    }
    if (window.innerWidth < ScreenPad) {
      quantity.set = setWithScreenPad;
      quantity.get = getWithScreenPad;
    }
    if (window.innerWidth < ScreenMobile) {
      quantity.set = setWithScreenMobile;
      quantity.get = getWithScreenMobile;
    }
    return quantity;
  };

  const handleLoadMore = () => {
    setCardLimit(cardLimit + cardsRender().get)
  }

  useEffect(() => {
    if (pathname === "/movies") {
      setCardLimit(cardsRender().set)
      const handleResize = () => {
        if (window.innerWidth > getWithScreenDesktop) {
          setCardLimit(cardsRender().set)
        }
        if (window.innerWidth < getWithScreenDesktop) {
          setCardLimit(cardsRender().set)
        }
        if (window.innerWidth < getWithScreenLaptop) {
          setCardLimit(cardsRender().set)
        }
        if (window.innerWidth < getWithScreenPad) {
          setCardLimit(cardsRender().set)
        }
        if (window.innerWidth < getWithScreenMobile) {
          setCardLimit(cardsRender().set)
        }
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [pathname, movies]);

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
