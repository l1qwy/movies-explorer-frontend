import AboutMe from "../aboutMe/AboutMe";
import AboutProject from "../aboutProject/AboutProject";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Promo from "../promo/Promo";
import Techs from "../techs/Techs";

export default function Main() {
  return (
    <div>
      <Header name="home-page"/>
      <main>
        <Promo />

        <AboutProject />

        <Techs />

        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
