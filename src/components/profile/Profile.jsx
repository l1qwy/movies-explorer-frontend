import "./profile.css";
import Header from "../header/Header";

export default function Profile() {

  return (
    <section className="profile" name="profile">
      <Header />
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" noValidate>
        <div className="profile__field-container">
          <input
            className="profile__field"
            name="nameProfile"
            type="text"
            minLength={3}
            required
            noValidate
          ></input>
          <label className="profile__field-label">Имя</label>
          <div
            className="profile__field-error"
          >
            <span id="name-error"></span>
          </div>
        </div>
        <div className="profile__field-container">
          <input
            className="profile__field"
            name="emailProfile"
            type="email"
          ></input>
          <label className="profile__field-label" >E-mail</label>
          <div className="profile__field-error">
            <span id="email-error"></span>
          </div>
        </div>
        <button className="profile__submit" type="submit">
          Редактировать
        </button>
        <button className="profile__logout" type="submit">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}
