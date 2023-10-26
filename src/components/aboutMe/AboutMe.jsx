import "./aboutMe.css"
import aboutMeImg from "../../images/aboutMeImg.png"
import Portfolio from "../portfolio/Portfolio"

export default function AboutMe() {
  return (
    <div className="aboutMe page__container">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__info">
        <div className="aboutMe__text">
          <h3 className="aboutMe__name">Виталий</h3>
          <p className="aboutMe__topic">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__discription">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <p className="aboutMe__git">Github</p>
        </div>
        <img className="aboutMe__img" src={aboutMeImg} alt="*"/>
      </div>
      <Portfolio>
        
      </Portfolio>
    </div>
  )
}