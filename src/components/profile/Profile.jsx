import "./profile.css";
import Header from "../header/Header";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useFormValidation from "../../utils/useFormValidation";
import { errorUpdatePrifile } from "../../utils/constants";

export default function Profile() {
  const { inputValue, errorMessage, isValid, isInputValid, handleChange, onLogout } =
    useFormValidation();

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked(true);
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="profile">
      <Header />
      <main>
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" name="profile-form" noValidate onSubmit={handleSubmit}>
          <fieldset className="profile__field-container">
            <span className="profile__field-label">Имя</span>
            <input
              className={`profile__field ${isInputValid.nameProfile === undefined || isInputValid.nameProfile ? "" : "profile__error"}`}
              name="nameProfile"
              type="text"
              placeholder="Введите Имя"
              minLength={3}
              required
              onChange={handleChange}
            ></input>
            <div className={`profile__field-error ${isInputValid.nameProfile ? "" : "profile__text-error"}`}>
              <span id="name-error" >{errorMessage.nameProfile}</span>
            </div>
            <span className="profile__field-label">E-mail</span>
            <input
              className={`profile__field ${isInputValid.emailProfile === undefined || isInputValid.emailProfile ? "" : "profile__error"}`}
              name="emailProfile"
              type="email"
              placeholder="Введите E-mail"
              required
              onChange={handleChange}
            ></input>
            <div className={`profile__field-error ${isInputValid.emailProfile ? "" : "profile__text-error"}`}>
              <span id="email-error">{errorMessage.emailProfile}</span>
            </div>
          </fieldset>
          <nav className="profile__nav">

            {isClicked ? (
              <><p className="profile__error-upd">{errorUpdatePrifile}</p>
              <button className={`profile__submit ${isValid ? "" : "submit_disabled"}`} aria-label="edit-erofile">Сохранить</button></>
            ) : (
              <>
                <button
                  className="profile__submit profile__submit_theme_outline-white" 
                  type="submit"
                  onClick={handleClick}
                >
                  Редактировать
                </button>
                  <NavLink to="/signup" className="profile__submit profile__submit_theme_outline-red" onClick={onLogout}>Выйти из аккаунта</NavLink>
              </>
            )}
          </nav>
        </form>
      </main>
    </div>
  );
}
