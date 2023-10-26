import "./searchForm.css";

export default function SearchForm({ isChecked, handleSwitchChange }) {

  return (
    <form className="searchForm page__container" onSubmit={(event) => {event.preventDefault()}}>
      <div className="searchForm__container">
        <input
          className="searchForm__container-input"
          placeholder="Фильм"
          type="text"
          required
          noValidate
        />
        <button className="searchForm__container-btn" type="submit" >Поиск</button>
      </div>
      <label className="searchForm__filter">
        <input 
          type="checkbox"           
          checked={isChecked}
          onChange={handleSwitchChange}
        ></input>
        <span className="searchForm__filter-slider">
          <p className="searchForm__filter-label">Короткометражки</p>
        </span>
      </label>
    </form>
  );
}
