import AboutMe from "../aboutMe/AboutMe";
import AboutProject from "../aboutProject/AboutProject";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Promo from "../promo/Promo";
import Techs from "../techs/Techs";
import "./main.css"

export default function Main({ isLogged }) {
  return (
    <div>
      <Header name="home-page" isLogged={isLogged} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
