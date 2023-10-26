import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer page__container">
      <p className="footer__production">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__copyring">
        <p className="footer__copyring-text">&copy; 2023</p>
        <div className="footer__copyring-sites">
          <p className="footer__copyring-text">Яндекс.Практикум</p>
          <p className="footer__copyring-text">Github</p>
        </div>
      </div>
    </footer>
  );
}
