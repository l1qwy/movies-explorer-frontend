import "./aboutProject.css"

export default function AboutProject() {
  return (
    <div className="aboutProject page__container">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__programm">
        <div className="aboutProject__programm-container">
          <p className="aboutProject__programm-title">Дипломный проект включал 5 этапов</p>
          <p className="aboutProject__programm-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__programm-container">
          <p className="aboutProject__programm-title">На выполнение диплома ушло 5 недель</p>
          <p className="aboutProject__programm-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__schematic">
        <div>
          <p className="aboutProject__schematic-backend">1 неделя</p>
          <p className="aboutProject__schematic-title">Back-end</p>
        </div>
        <div>
          <p className="aboutProject__schematic-frontend">4 недели</p>
          <p className="aboutProject__schematic-title">Front-end</p>
        </div>
      </div>

    </div>
  )
}