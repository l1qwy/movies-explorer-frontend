import "./techs.css";

export default function Techs() {
  return (
    <div className="techs page__container">
      <h1 className="techs__title">Технологии</h1>
      <h2 className="techs__topic">7 технологий</h2>
      <p className="techs__topic-description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__schema">
        <li className="techs__schema-block">
          <p className="techs__schema-block-title"></p>HTML
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title"></p>CSS
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title"></p>JS
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title"></p>React
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title"></p>Git
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title"></p>Express.js
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title"></p>mongoDB
        </li>
      </ul>
    </div>
  );
}
