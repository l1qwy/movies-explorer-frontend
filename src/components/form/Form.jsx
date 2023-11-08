import "./form.css";
import Logo__img from "../../images/logo.png";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Form({
  name,
  title,
  textButton,
  labelName,
  labelEmail,
  labelPassword,
  onRegister,
  onLogin,
  isSuccessfully,
  setIsSuccessfully,
  isSending,
  setIsSending
}) {

  const { inputValue, errorMessage, isValid, isInputValid, handleChange } =
    useFormValidation();

  useEffect(() => {
    setIsSuccessfully(true)
    setIsSending(false);
  }, [setIsSuccessfully])

  const currentUser = useContext(CurrentUserContext);

  function registerSubmit(event) {
    event.preventDefault();
    setIsSending(true)
    onRegister(inputValue.name, inputValue.email, inputValue.password);
  }

  function loginSubmit(event) {
    setIsSending(true)
    event.preventDefault();
    onLogin(inputValue.email, inputValue.password);
  }

  return (
    <form
      className="form"
      name={name}
      onSubmit={name === "login" ? loginSubmit : registerSubmit}
    >
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
          <>
            <label className="form__field-label">{labelName}</label>
            <input
              className={`form__field form__field_type_register ${
                isInputValid.name === undefined ||
                isInputValid.name
                  ? ""
                  : "form__error"
              }`}
              name="name"
              type="text"
              placeholder="Введите Ваше Имя"
              autoComplete="off"
              minLength={3}
              required
              disabled={isSending}
              value={
                (currentUser.name = inputValue.name
                  ? inputValue.name
                  : "")
              }
              onChange={(event) => {
                handleChange(event)
                setIsSuccessfully(true)
              }}
            ></input>
            <div
              className={`form__field-error ${
                isInputValid.name ? "" : "form__field-error"
              }`}
            >
              <span id="name-error">{errorMessage.name}</span>
            </div>
          </>
        )}
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
          disabled={isSending}
          pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
          value={(currentUser.email = inputValue.email ? inputValue.email : "")}
          onChange={(event) => {
            handleChange(event)
            setIsSuccessfully(true)
          }}
        ></input>
        <div
          className={`form__field-error ${
            isInputValid.email ? "" : "form__field-error"
          }`}
        >
          <span id="email-error">{errorMessage.email}</span>
        </div>
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
          disabled={isSending}
          value={inputValue.password ? inputValue.password : ""}
          onChange={(event) => {
            handleChange(event)
            setIsSuccessfully(true)
          }}
        ></input>
        <div
          className={`form__field-error ${
            isInputValid.password ? "" : "form__field-error"
          }`}
        >
          <span id="password-error">{errorMessage.password}</span>
        </div>

        <div className={`form__nav ${name === "login" ? "form__nav_type_login" : "form__nav_type_register"}`}>
        <span className="form__request">
          {isSuccessfully ? "" : "При регистрации пользователя произошла ошибка"}
        </span>

          <button
          className={`form__submit ${isValid ? "" : "form__submit_disable"}`}
            disabled={!isValid | isSending}
            type="submit"
          > 
            {textButton}
          </button>
          <p className="form__note">
            {name === "register"
              ? "Уже зарегистрированы?"
              : "Ещё не зарегистрированы?"}
            &nbsp;
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
      </div>
    </form>
  );
}
