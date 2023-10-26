import "./form.css";
import Logo__img from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Form({
  name,
  title,
  textButton,
  labelName,
  labelEmail,
  labelPassword,
}) {
  return (
    <form className="form" name={name} noValidate>
      <Link to="/">
      <img className="header__logo header__logo_auth" src={Logo__img} alt="Логотип страницы" />
      </Link>
      <h2 className="form__title">{title}</h2>
      <div className="form__fields-container">
        {name === "login" ? (
          ""
        ) : (
          <div className="form__field-container">
            <input
              className="form__field form__field_register"
              name="name"
              type="text"
              minLength={3}
              required
            ></input>
            <label className="form__field-label">{labelName}</label>
            <div className="form__field-error">
              <span id="name-error"></span>
            </div>
          </div>
        )}
        <div className="form__field-container">
          <input
            className="form__field form__field_register"
            name="email"
            type="email"
            minLength={3}
            required
          ></input>
          <label className="form__field-label">{labelEmail}</label>
          <div className="form__field-error">
            <span id="email-error"></span>
          </div>
        </div>
        <div className="form__field-container">
          <input
            className="form__field form__field_register"
            name="password"
            type="password"
            minLength={3}
            required
          ></input>
          <label className="form__field-label">{labelPassword}</label>
          <div className="form__field-error">
            <span id="password-error"></span>
          </div>
        </div>
        <button
          className={
            name === "register" ? (
              "form__submit"
            ) : (
              name === "login" ? "form__submit form__submit_login" : ""
            )
          }
        >
          {textButton}
        </button>
        <p className="form__note">
          {name === "register"
            ? "Уже зарегистрированы?"
            : "Ещё не зарегистрированы?"}{" "}
            {name === "register" ? <Link to="/signin" className="form__note_link">Войти</Link> : <Link to="/signup" className="form__note_link">Регистрация</Link>}
        </p>
      </div>
    </form>
  );
}
