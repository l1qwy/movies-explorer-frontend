import "./searchForm.css";

export default function SearchForm({ isChecked, handleSwitchChange }) {

  return (
    <form className="search-form" name="search-form" onSubmit={(event) => {event.preventDefault()}}>
      <div className="search-form__container">
        <input
          className="search-form__container-input"
          placeholder="Фильм"
          type="text"
          required
        />
        <button className="search-form__container-btn" type="submit" >Поиск</button>
      </div>
      {/* <label className="search-form__filter">      
        <input 
          type="checkbox"           
          checked={isChecked}
          onChange={handleSwitchChange}
        ></input>
        </label>
        <div className="search-form__filter-slider">
          <p className="search-form__filter-label">Короткометражки</p>
        </div> */}
      <label class="search-form__filter">
        <input type="checkbox"></input>
        <span class="search-form__filter-slider"></span>
      </label>

    </form>
  );
}
