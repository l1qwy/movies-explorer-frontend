import "./aboutProject.css"

export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__programm">
        <div className="about-project__description">
          <p className="about-project__stage">Дипломный проект включал 5 этапов</p>
          <p className="about-project__plan">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__description">
          <p className="about-project__stage">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__plan">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__schematic">
        <div className="about-project__backend">
          <p className="about-project__time about-project__time_green">1 неделя</p>
          <p className="about-project__label">Back-end</p>
        </div>
        <div className="about-project__fronend">
          <p className="about-project__time about-project__time_gray">4 недели</p>
          <p className="about-project__label">Front-end</p>
        </div>
      </div>

    </section>
  )
}