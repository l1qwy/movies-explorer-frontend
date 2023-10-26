import "./navigation.css";
import navigation__logoImg from "../../images/account-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import navigationIcon from "../../images/navigation-icon.svg";
import navigationIconClose from "../../images/navigation-iconClose.svg"

export default function Navigation() {
  const [isOpen, setOpen] = useState();

  return (
    <div className="navigation">
      <img
        className="navigation__img"
        src={navigationIcon}
        alt="иконка кнопки меню"
        onClick={() => setOpen(!isOpen)}
      />
      <div className={`navigation__menu ${isOpen ? "active" : ""}`}>
      <img
        className="navigation__img-close"
        src={navigationIconClose}
        alt="иконка кнопки меню"
        onClick={() => setOpen(!isOpen)}
      />
        <div className="navigation__container">
          <div className="navigation__list">
          {isOpen ? <NavLink className="navigation__movies" to="/">
            Главная
          </NavLink> : ""}
          <NavLink className="navigation__movies" to="/movies">
            Фильмы
          </NavLink>
          <NavLink className="navigation__movies" to="/savedMovies">
            Сохраненные фильмы
          </NavLink>
          </div>
          <div className="navigation__profile">
            <NavLink className="navigation__profile-link" to="/profile">
              Аккаунт
            </NavLink>
            <Link className="navigation__profile-logo" to="/profile">
              <img
                className="navigation__profile-logoImg"
                src={navigation__logoImg}
                alt="Здесь должеа быит иконка аккаунта"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
