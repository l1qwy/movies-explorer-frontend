import { Link } from "react-router-dom";
import "./headerAuth.css";
import Logo__img from "../../images/logo.png"

export default function HeaderAuth() {
  return (
    <header className="header-auth page__container">
      <Link to="/">
        <img className="header__logo" src={Logo__img} alt="Логототип сайта" />
      </Link>
      <nav className="header-auth__nav">
        <Link className="header-auth__nav-link navigation__items" to="/signup">Регистрация</Link>
        <Link to="/signin"><button className="header-auth__loginBtn">Войти</button></Link>
      </nav>
    </header>
  );
}
