import "./profile.css";
import Header from "../header/Header";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useFormValidation from "../../utils/useFormValidation";
import { errorUpdatePrifile } from "../../utils/constants";

export default function Profile() {
  const { inputValue, errorMessage, isValid, isInputValid, handleChange } =
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
    <section className="profile" name="profile">
      <Header />
      <main>
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" name="profileForm" noValidate onSubmit={handleSubmit}>
          <fieldset className="profile__field-container">
            <label className="profile__field-label">Имя</label>
            <input
              className={`profile__field ${isInputValid.nameProfile === undefined || isInputValid.nameProfile ? "" : "form__error"}`}
              name="nameProfile"
              type="text"
              placeholder="Введите Имя"
              minLength={3}
              required
              onChange={handleChange}
            ></input>
            <div className={`profile__field-error ${isInputValid.nameProfile ? "" : "form__field_error"}`}>
              <span id="name-error" >{errorMessage.nameProfile}</span>
            </div>
          {/* </fieldset> */}
          {/* <div className="profile__field-container"> */}
            <label className="profile__field-label">E-mail</label>
            <input
              className={`profile__field ${isInputValid.emailProfile === undefined || isInputValid.emailProfile ? "" : "form__error"}`}
              name="emailProfile"
              type="email"
              placeholder="Введите E-mail"
              required
              onChange={handleChange}
            ></input>
            <div className={`profile__field-error ${isInputValid.emailProfile ? "" : "form__field_error"}`}>
              <span id="email-error">{errorMessage.emailProfile}</span>
            </div>
          </fieldset>
          <nav className="profile__nav">
            <p className="profile__error-upd">{errorUpdatePrifile}</p>
            {isClicked ? (
              <button className={`profile__submit_update form__submit ${isValid ? "" : "submit_disabled"}`} aria-label="editProfile">Сохранить</button>
            ) : (
              <>
                <button
                  className="profile__submit_edit" 
                  type="submit"
                  onClick={handleClick}
                >
                  Редактировать
                </button>
                <NavLink to="/signup">
                  <button className="profile__submit_logout" type="submit">
                    Выйти из аккаунта
                  </button>
                </NavLink>
              </>
            )}
          </nav>
        </form>
      </main>
    </section>
  );
}
