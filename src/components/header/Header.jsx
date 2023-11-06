import Logo__img from "../../images/logo.png";
import Navigation from "../navigation/Navigation";
import "./header.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Header({ isLogged }) {
  const {pathname} = useLocation()

  return (
        <header
      className={`header ${pathname === "/" ? "app__home-page" : ""}`}
    >
      <NavLink to="/">
          <img className="header__logo" src={Logo__img} alt="Логототип сайта" />
      </NavLink>
      <div className="header__links">
        {pathname === '/' && !isLogged ? 
             <nav className="header__auth-nav">
             <NavLink className="header__auth-link" to="/signup">
               Регистрация
             </NavLink>
             <NavLink to="/signin" className="header__auth-login">
               Войти
             </NavLink>
           </nav> :
           <Navigation />}
      </div>
    </header>
  );
}
