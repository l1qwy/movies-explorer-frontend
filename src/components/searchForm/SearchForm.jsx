import "./searchForm.css";

export default function SearchForm({ isChecked, handleSwitchChange }) {

  return (
    <form className="search-form page__container" name="search-form" onSubmit={(event) => {event.preventDefault()}}>
      <div className="search-form__container">
        <input
          className="search-form__container-input"
          placeholder="Фильм"
          type="text"
          required
          noValidate
        />
        <button className="search-form__container-btn" type="submit" >Поиск</button>
      </div>
      <label className="search-form__filter">
        <input 
          type="checkbox"           
          checked={isChecked}
          onChange={handleSwitchChange}
        ></input>
        <span className="search-form__filter-slider">
          <p className="search-form__filter-label">Короткометражки</p>
        </span>
      </label>
    </form>
  );
}
