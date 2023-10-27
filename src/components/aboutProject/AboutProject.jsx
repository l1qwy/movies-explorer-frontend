import "./aboutProject.css"

export default function AboutProject() {
  return (
    <div className="about-project page__container">
      <h1 className="about-project__title">О проекте</h1>
      <div className="about-project__programm">
        <div className="about-project__programm-container">
          <p className="about-project__programm-title">Дипломный проект включал 5 этапов</p>
          <p className="about-project__programm-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__programm-container">
          <p className="about-project__programm-title">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__programm-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__schematic">
        <div className="about-project__schematic_backend">
          <p className="about-project__schematic-tag_green">1 неделя</p>
          <p className="about-project__schematic-title">Back-end</p>
        </div>
        <div className="about-project__schematic_frontend">
          <p className="about-project__schematic-tag_gray">4 недели</p>
          <p className="about-project__schematic-title">Front-end</p>
        </div>
      </div>

    </div>
  )
}