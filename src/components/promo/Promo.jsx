import promoImg from "../../images/promo-logo.png";
import "./promo.css";

export default function Promo() {
  const handleButtonClick = () => {
    const targetDiv = document.getElementById("targetDiv");
    targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="promo page__container">
      <div className="promo__text-container">
        <h1 className="promo__title">
          Учебный&nbsp;проект студента факультета Веб&zwj;-&zwj;разработки.
        </h1>
        <p className="promo__tip">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button
          className="promo__learn-more"
          id="promo__learn-more"
          onClick={handleButtonClick}
        >
          Узнать больше
        </button>
        <div id="targetDiv"></div>
      </div>
      <img
        className="promo-img"
        src={promoImg}
        alt="Картинка главной страницы"
      />
    </section>
  );
}
