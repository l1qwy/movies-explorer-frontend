import { useState } from "react";
import Logo__img from "../../images/logo.png";
import Navigation from "../navigation/Navigation";
import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header({ name }) {
  const [isLoged, setIsLoged] = useState(false);

  return !isLoged ? (
    
    <header
      className={`header ${
        name === "home-page" ? "app__home-page" : ""
      }`}
    >
      <NavLink to="/">
        <div className="header__btn">
          <img className="header__logo" src={Logo__img} alt="Логототип сайта" />
        </div>
      </NavLink>
      <div className="header__links" >
        <Navigation name={name} />
      </div>
    </header>
  ) : (
    <header className="header header__auth page__container">
    <NavLink to="/">
      <img className="header__logo" src={Logo__img} alt="Логототип сайта" />
    </NavLink>
    <nav className="header__auth-nav">
      <NavLink className="header__auth-link" to="/signup">
        Регистрация
      </NavLink>
      <NavLink to="/signin" className="header__auth-login">Войти</NavLink>
    </nav>
  </header>
  );
}
