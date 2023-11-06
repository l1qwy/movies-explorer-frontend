import "./profile.css";
import Header from "../header/Header";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import useFormValidation from "../../utils/useFormValidation";
import { emailRegex } from "../../utils/constants";
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
  console.log(isSending)
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
    reset({ nameProfile: currentUser.name, emailProfile: currentUser.email });
  }, [reset, currentUser]);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true)
    onEditProfile(inputValue.nameProfile, inputValue.emailProfile);
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
                isInputValid.nameProfile === undefined ||
                isInputValid.nameProfile
                  ? ""
                  : "profile__error"
              }`}
              name="nameProfile"
              type="text"
              placeholder="Введите Имя"
              minLength={3}
              required
              value={inputValue.nameProfile ? inputValue.nameProfile : ""}
              onChange={(event) => {
                handleChange(event);
                setIsSuccessfully(false);
              }}
              disabled={!isChanged}
            ></input>
            <div
              className={`profile__field-error ${
                isInputValid.nameProfile ? "" : "profile__text-error"
              }`}
            >
              <span id="name-error">{errorMessage.nameProfile}</span>
            </div>
            <span className="profile__field-label">E-mail</span>
            <input
              className={`profile__field ${
                isInputValid.emailProfile === undefined ||
                isInputValid.emailProfile
                  ? ""
                  : "profile__error"
              }`}
              name="emailProfile"
              type="email"
              placeholder="Введите E-mail"
              required
              pattern={emailRegex}
              value={inputValue.emailProfile ? inputValue.emailProfile : ""}
              onChange={(event) => {
                handleChange(event);
                setIsSuccessfully(false);
              }}
              disabled={!isChanged}
            ></input>
            <div
              className={`profile__field-error ${
                isInputValid.emailProfile ? "" : "profile__text-error"
              }`}
            >
              <span id="email-error">{errorMessage.emailProfile}</span>
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
                  disabled={!isValid || isSending}
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
                  to="/signup"
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
