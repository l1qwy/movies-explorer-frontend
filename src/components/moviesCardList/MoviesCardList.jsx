import MoviesCard from "../moviesCard/MoviesCard";
import "./moviesCardList.css";

export default function MoviesCardList({ visibleCards }) {

  return (
    <section className="moviesCardList page__container" name="moviesList">
      {visibleCards.map((data) => {
        return (
          <article key={data.id}> 
            <MoviesCard  cards={data} />
          </article>
        );
      })}
    </section>
  );
}
