import "./profile.css";
import Header from "../header/Header";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import useFormValidation from "../../utils/useFormValidation";
import { Link } from "react-router-dom";

export default function Profile({
  onLogout,
  onEditProfile,
  isSuccessfully,
  setIsSuccessfully,
  isError,
  isChanged,
  setIsChanged,
  isSending,
  setIsSending
}) {
  const currentUser = useContext(CurrentUserContext);

  const {
    inputValue,
    errorMessage,
    isValid,
    isInputValid,
    handleChange,
    reset,
  } = useFormValidation();

  useEffect(() => {
    setIsSuccessfully(false);
  }, [setIsSuccessfully]);

  useEffect(() => {
    reset({ name: currentUser.name, email: currentUser.email });
  }, [reset, currentUser.name, currentUser.email]);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true)
    onEditProfile(inputValue.name, inputValue.email);
  }

  return (
    <div className="profile">
      <Header />
      <main>
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form
          className="profile__form"
          name="profile-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <fieldset className="profile__field-container">
            <span className="profile__field-label">Имя</span>
            <input
              className={`profile__field ${
                isInputValid.name === undefined ||
                isInputValid.name
                  ? ""
                  : "profile__error"
              }`}
              name="name"
              type="text"
              placeholder="Введите Имя"
              minLength={3}
              required
              value={inputValue.name ? inputValue.name : ""}
              onChange={(event) => {
                handleChange(event);
                setIsSuccessfully(false);
              }}
              disabled={!isChanged | isSending}
            ></input>
            <div
              className={`profile__field-error ${
                isInputValid.name ? "" : "profile__text-error"
              }`}
            >
              <span id="name-error">{errorMessage.name}</span>
            </div>
            <span className="profile__field-label">E-mail</span>
            <input
              className={`profile__field ${
                isInputValid.email === undefined ||
                isInputValid.email
                  ? ""
                  : "profile__error"
              }`}
              name="email"
              type="email"
              placeholder="Введите E-mail"
              required
              pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
              value={inputValue.email ? inputValue.email : ""}
              onChange={(event) => {
                handleChange(event);
                setIsSuccessfully(false);
              }}
              disabled={!isChanged | isSending}
            ></input>
            <div
              className={`profile__field-error ${
                isInputValid.email ? "" : "profile__text-error"
              }`}
            >
              <span id="email-error">{errorMessage.email}</span>
            </div>
          </fieldset>
          <nav className="profile__nav">
            {isChanged ? (
              <>
                <span className={"profile__error-upd "}>
                  {isError ? "При обновлении профиля произошла ошибка." : ""}
                </span>
                <button
                  className={`profile__submit ${
                    isValid ? "" : "profile__submit_diabled"
                  }`}
                  aria-label="edit-erofile"
                  type="submit"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  disabled={!isValid | isSending}
                >
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <span className={"profile__error-upd_type_true"}>
                  {isSuccessfully ? "Данные успешно сохранены" : ""}
                </span>
                <button
                  className="profile__submit profile__submit_theme_outline-white"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsChanged(true);
                  }}
                >
                  Редактировать
                </button>
                <Link
                  type="submit"
                  to="/"
                  className="profile__submit profile__submit_theme_outline-red"
                  onClick={onLogout}
                >
                  Выйти из аккаунта
                </Link>
              </>
            )}
          </nav>
        </form>
      </main>
    </div>
  );
}
