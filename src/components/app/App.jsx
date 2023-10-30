import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../main/Main";
import Profile from "../profile/Profile";
import Register from "../register/Register";
import Login from "../login/Login";
import Page404 from "../page404/Page404"
import Movies from "../movies/Movies";
import SavedMovies from "../savedMovies/savedMovies";
import MoviesApi from "../../utils/moviesApi";
import "./app.css"

export default function App() {
  const [cards, setCards] = useState([]);
  const [isLoged, setIsLoged] = useState(false);

  useEffect(() => {
      Promise.all([MoviesApi.getServerCards()])
        .then(([cardsInfo]) => {
          setCards(cardsInfo);
        })
        .catch((error) =>
          console.error("Ошибка при формировании страницы " + error)
        );
  }, []);
  

  function handleLogin (name, email, event) {
    event.preventDefault()
  }

  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies cards={cards} />} />
          <Route path="/savedMovies" element={<SavedMovies cards={cards}/>} />
          <Route
            path="/signup"
            element={
              <Register
                title="Добро пожаловать!"
                textButton="Зарегистрироваться"
                labelName="Имя"
                labelEmail="E-mail"
                labelPassword="Пароль"
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                title="Рады видеть!"
                textButton="Войти"
                labelEmail="E-mail"
                labelPassword="Пароль"
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile onLogin={handleLogin}/>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
  );
}
