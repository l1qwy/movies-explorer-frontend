import "./moviesCard.css";
import { useEffect, useState } from "react";
import iconSaveCard from "../../images/iconSaveCard.svg";
import iconDeleteCard from "../../images/iconDeleteCard.svg";
import { Link, useLocation } from "react-router-dom";

export default function MoviesCard({ data, savedMovies, onDelete, onSave }) {
  const { pathname } = useLocation();
  const [choose, setChoose] = useState(false);

  useEffect(() => {
    if (pathname === "/movies")
      setChoose(savedMovies.some((item) => data.id === item.movieId));
  }, [savedMovies, data.id, setChoose, pathname]);

  function handleClick() {
    if (savedMovies.some((item) => data.id === item.movieId)) {
      setChoose(true);
      onSave(data);
    } else {
      setChoose(false);
      onSave(data);
    }
  }

  function convertToTime(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes < 10 ? "0" : ""}${minutes}м`;
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__info-name">{data.nameRU}</h2>
        <p className="movies-card__info-time">{convertToTime(data.duration)}</p>
      </div>
      <Link to={data.trailerLink} target="_blank">
        <img
          className="movies-card__img"
          src={
            pathname === "/movies"
              ? `https://api.nomoreparties.co/${data.image.url}`
              : data.image
          }
          alt={`Постер ${data.nameRU}`}
        ></img>
      </Link>

      {pathname === "/movies" ? (
        <button
          type="button"
          className={`movies-card__btn ${
            choose ? "movies-card__btn_saved" : ""
          }`}
          onClick={handleClick}
        >
          {choose ? (
            <img
              className="movies-card__saveIcon"
              src={iconSaveCard}
              alt="иконка сохраненного фильма"
            />
          ) : (
            "Сохранить"
          )}
        </button>
      ) : (
        <button
          type="button"
          className={`movies-card__btn ${
            choose ? "movies-card__btn_deleted" : ""
          }`}
          onClick={() => onDelete(data._id)}
        >
          <img
            className="movies-save__deleteIcon"
            src={iconDeleteCard}
            alt="иконка сохраненного фильма"
          />
        </button>
      )}
    </div>
  );
}
