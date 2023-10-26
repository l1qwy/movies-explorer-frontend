import Logo__img from "../../images/logo.svg";
import Navigation from "../navigation/Navigation";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header({ name }) {
  return (
    <header
      className={`header page__container ${
        name === "homePage" ? "header__homePage" : ""
      }`}
    >
      <Link to="/">
        <img className="header__logo" src={Logo__img} alt="Логототип сайта" />
      </Link>
      <div className="header__links">
        <Navigation name={name}/>
      </div>
    </header>
  );
}
