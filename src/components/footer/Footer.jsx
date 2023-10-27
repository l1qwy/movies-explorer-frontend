import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer page__container">
      <h1 className="footer__production">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h1>
      <div className="footer__copyring">
        <p className="footer__copyring-text footer__copyring-text_type_year">&copy; 2023</p>
        <div className="footer__copyring-sites">
          <a className="footer__copyring-link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer"><p className="footer__copyring-text">Яндекс.Практикум</p></a>
          <a className="footer__copyring-link" href="https://github.com/" target="_blank" rel="noreferrer"><p className="footer__copyring-text">Github</p></a>
        </div>
      </div>
    </footer>
  );
}
