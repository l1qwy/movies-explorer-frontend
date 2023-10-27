import "./aboutMe.css"
import aboutMeImg from "../../images/aboutMeImg.png"
import Portfolio from "../portfolio/Portfolio"

export default function aboutMe() {
  return (
    <div className="about-me page__container">
      <h1 className="about-me__title">Студент</h1>
      <div className="about-me__info">
        <div className="about-me__text">
          <h2 className="about-me__name">Виталий</h2>
          <p className="about-me__topic">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__discription">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="about-me__git-link" href="https://github.com/l1qwy" target="_blank" rel="noreferrer"><p className="about-me__git">Github</p></a>
        </div>
        <img className="about-me__img" src={aboutMeImg} alt="Изображение разработчика"/>
      </div>
      <Portfolio>
        
      </Portfolio>
    </div>
  )
}