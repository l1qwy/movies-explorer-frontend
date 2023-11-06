import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./searchForm.css";
import useFormValidation from "../../utils/useFormValidation";

export default function SearchForm({
  searchMovies,
  isCheckShots,
  sortingShorts,
  searchQuery,
  savedMovies,
}) {
  const { pathname } = useLocation();
  const [isSuccessfully, setIsSuccessfully] = useState(true);

  const { inputValue, handleChange, reset } = useFormValidation();

  useEffect(() => {
    if (pathname === "/saved-movies" && savedMovies.length === 0) {
      reset({ search: "" });
    }
    reset({ search: searchQuery });
    setIsSuccessfully(true);
  }, [searchQuery, pathname, savedMovies, reset]);

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.search.value) {
      searchMovies(event.target.search.value);
    } else {
      setIsSuccessfully(false);
    }
  }

  return (
    <form
      className="search-form"
      name="search-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="search-form__container">
        <input
          className="search-form__container-input"
          placeholder="Фильм"
          type="text"
          name="search"
          required
          onChange={(event) => {
            handleChange(event);
            setIsSuccessfully(true);
          }}
          value={inputValue.search || ""}
        />
        <span className="search-form__error">{isSuccessfully ? "" : "Нужно ввести ключевое слово"}</span>
        <button className="search-form__container-btn" type="submit">
          Поиск
        </button>
      </div>
      <label className="search-form__filter">
        <input
          type="checkbox"
          onChange={() => sortingShorts()}
          checked={isCheckShots}
        ></input>
        <span className="search-form__filter-slider"></span>
      </label>
    </form>
  );
}
