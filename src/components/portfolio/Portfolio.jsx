import "./portfolio.css";
import portfolioImg from "../../images/portfolio-link.svg";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__links">
          <a className="portfolio__link" href="https://l1qwy.github.io/howTo-learn/" target="_blank" rel="noreferrer">
            Статичный сайт
            <img className="portfolio__link-img" src={portfolioImg} alt="*" />
          </a>
        </li>
        <li className="portfolio__links">
          <a className="portfolio__link" href="https://l1qwy.github.io/russian-travel/" target="_blank" rel="noreferrer">
            Адаптивный сайт
            <img className="portfolio__link-img" src={portfolioImg} alt="*" />
          </a>
        </li>
        <li className="portfolio__links">
          <a className="portfolio__link" href="https://github.com/l1qwy/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
            Одностраничное приложение
            <img className="portfolio__link-img" src={portfolioImg} alt="*" />
          </a>
        </li>
      </ul>
    </div>
  );
}
