import MoviesCard from "../moviesCard/MoviesCard";
import "./moviesCardList.css";

export default function MoviesCardList({ visibleCards, name }) {

  return (
    <section className="movies-cardList page__container" name="movies-cardList">
      {visibleCards.map((data) => {
        return (
          <article key={data.id}> 
            <MoviesCard  cards={data} name={name}/>
          </article>
        );
      })}
    </section>
  );
}
