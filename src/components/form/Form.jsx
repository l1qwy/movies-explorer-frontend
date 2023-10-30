import "./form.css";
import Logo__img from "../../images/logo.png";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";

export default function Form({
  name,
  title,
  textButton,
  labelName,
  labelEmail,
  labelPassword,
}) {
  const { inputValue, errorMessage, isValid, isInputValid, handleChange } =
    useFormValidation();

  const handleClick = (event) => {
    event.preventDefault();
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="form" name={name} onSubmit={handleSubmit}>
      <Link to="/">
        <img
          className="form__logo form__logo_type_auth"
          src={Logo__img}
          alt="Логотип страницы"
        />
      </Link>
      <h1 className="form__title">{title}</h1>
      <div className="form__fields-container">
        {name === "login" ? (
          ""
        ) : (

            <><label className="form__field-label">{labelName}</label>
            <input
              className={`form__field form__field_type_register ${isInputValid.name === undefined || isInputValid.name
                  ? ""
                  : "form__error"}`}
              name="name"
              type="text"
              placeholder="Введите Ваше Имя"
              autoComplete="off"
              minLength={3}
              required
              onChange={handleChange}
            ></input>
            <div
              className={`form__field-error ${isInputValid.name ? "" : "form__field-error"}`}
            >
                <span id="name-error">{errorMessage.name}</span>
              </div></>

        )}
        {/* <div className="form__field-container"> */}
          <label className="form__field-label">{labelEmail} </label>
          <input
            className={`form__field form__field_type_register ${
              isInputValid.email === undefined || isInputValid.email
                ? ""
                : "form__error"
            }`}
            name="email"
            type="email"
            placeholder="Введите Ваш E-mail"
            autoComplete="off"
            minLength={3}
            required
            onChange={handleChange}
          ></input>
          <div
            className={`form__field-error ${
              isInputValid.email ? "" : "form__field-error"
            }`}
          >
            <span id="email-error">{errorMessage.email}</span>
          </div>
        {/* </div> */}
        {/* <div className="form__field-container"> */}
          <label className="form__field-label">{labelPassword} </label>
          <input
            className={`form__field form__field_type_register ${
              isInputValid.password === undefined || isInputValid.password
                ? ""
                : "form__error form__error_password"
            }`}
            name="password"
            type="password"
            placeholder="Введите Ваш Пароль"
            autoComplete="off"
            minLength={3}
            required
            onChange={handleChange}
          ></input>
          <div
            className={`form__field-error ${
              isInputValid.password ? "" : "form__field-error"
            }`}
          >
            <span id="password-error">{errorMessage.password}</span>
          </div>
        {/* </div> */}
        <button
          className={
            name === "register"
              ? "form__submit_type_register form__submit"
              : name === "login"
              ? "form__submit form__submit_type_login"
              : ""
          }
          type="submit"
          onClick={handleClick}
        >
          {textButton}
        </button>
        <p className="form__note">
          {name === "register"
            ? "Уже зарегистрированы?"
            : "Ещё не зарегистрированы?"}&nbsp;
          {name === "register" ? (
            <Link to="/signin" className="form__auth-link">
              Войти
            </Link>
          ) : (
            <Link to="/signup" className="form__auth-link">
              Регистрация
            </Link>
          )}
        </p>
      </div>
    </form>
  );
}
