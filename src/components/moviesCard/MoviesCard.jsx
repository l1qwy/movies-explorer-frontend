import "./moviesCard.css";
import { durationHourMinute } from "../../utils/constants";
import { useState } from "react";
import iconSaveCard from "../../images/iconSaveCard.svg";
import iconDeleteCard from "../../images/iconDeleteCard.svg"

export default function MoviesCard({ cards, name }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeToggle() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__info-name">{cards.nameRU}</h2>
        <p className="movies-card__info-time">
          {Math.round(cards.duration / durationHourMinute)}ч{" "}
          {cards.duration -
            durationHourMinute *
              Math.round(cards.duration / durationHourMinute)}
          м
        </p>
      </div>
      <img
        className="movies-card__img"
        src={`https://api.nomoreparties.co/${cards.image.url}`}
        alt={`Постер ${cards.nameRU}`}
      ></img>
      {name === "savedMovies" ? (
        <button className="movies-card__btn">
          <img className="movies-card__saveIcon"  src={iconDeleteCard} alt="иконка удаления фильма" />
        </button>
      ) : (
        <button
          className={
            isLiked
              ? "movies-card__btn movies-card__btn_saved"
              : "movies-card__btn"
          }
          onClick={handleLikeToggle}
        >
          {isLiked ? (
            <img
              className="movies-card__saveIcon"
              src={iconSaveCard}
              alt="иконка сохраненного фильма"
            />
          ) : (
            "Сохранить"
          )}
        </button>
      )}
    </div>
  );
}
