import "./navigation.css";
import navigation__logoImg from "../../images/account-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navigation">
      <button
        className={`navigation__btn ${isOpen ? "active" : ""}`}
        onClick={() => setOpen(!isOpen)}
        type="button"
      ></button>
      <div className={`navigation__menu ${isOpen ? "active" : ""}`}>
        <nav className="navigation__container">
          <div className="navigation__list">
            {isOpen ? (
              <NavLink
                className="navigation__items navigation__items-slide"
                to="/"
              >
                Главная
              </NavLink>
            ) : (
              ""
            )}
            <NavLink className="navigation__items" to="/movies">
              Фильмы
            </NavLink>
            <NavLink className="navigation__items" to="/saved-movies">
              Сохраненные фильмы
            </NavLink>
          </div>
          <div className="navigation__profile navigation__profile-slide">
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
        </nav>
      </div>
    </div>
  );
}
