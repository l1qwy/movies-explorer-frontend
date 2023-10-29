import "./techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__topic">7 технологий</h3>
      <p className="techs__topic-description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__schema">
        <li className="techs__schema-block">
          <p className="techs__schema-block-title">HTML</p>
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title">CSS</p>
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title">JS</p>
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title">React</p>
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title">Git</p>
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title">Express.js</p>
        </li>
        <li className="techs__schema-block">
          <p className="techs__schema-block-title">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}
