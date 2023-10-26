import promoImg from "../../images/promo-logo.svg";
import "./promo.css";

export default function Promo() {
  const handleButtonClick = () => {
    const targetDiv = document.getElementById("targetDiv");
    targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="promo page__container">
      <div className="promo__textContainer">
        <h1 className="promo__title">
          Учебный проект студента
          <nobr />
          факультета Веб-разработки.
        </h1>
        <p className="promo__tip">
          Листайте ниже, чтобы узнать больше
          <br /> про этот проект и его создателя.
        </p>
        <button
          className="promo__learnMore"
          id="promo__learnMore"
          onClick={handleButtonClick}
        >
          Узнать больше
        </button>
        <div id="targetDiv"></div>
      </div>
      <img
        className="promo__img"
        src={promoImg}
        alt="Картинка главной страницы"
      />
    </section>
  );
}
