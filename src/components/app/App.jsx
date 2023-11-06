import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Main from "../main/Main";
import Profile from "../profile/Profile";
import Register from "../register/Register";
import Login from "../login/Login";
import Page404 from "../page404/Page404";
import Movies from "../movies/Movies";
import SavedMovies from "../savedMovies/savedMovies";
import "./app.css";
import mainApi from "../../utils/mainApi";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Preloader from "../preloader/Preloader";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccessfully, setIsSuccessfully] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [isSending, setIsSending] = useState(true)

  useEffect(() => {
    const checkToken = async () => {
      try {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
          const [userData, moviesData] = await Promise.all([
            mainApi.getUserInfo(jwt),
            mainApi.getMainMovies(jwt),
          ]);
          setSavedMovies(moviesData);
          setCurrentUser(userData);
          setIsLogged(true);
        } else {
          setIsLogged(false);
          setIsSuccessfully(false);
        }
      } catch (error) {
        console.error("Ошибка при формировании страницы: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();
  }, []);

  const handleRegister = async (name, email, password) => {
    try {
      await mainApi.registration(name, email, password);
      setIsLogged(false);
      navigate("/movies");
      await handleLogin(email, password);
    } catch (error) {
      setIsError(true);
      setIsSuccessfully(false);
      console.error("Ошибка при регистрации: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const { token } = await mainApi.authorization(email, password);
      localStorage.setItem("jwt", token);
      setIsLogged(true);
      setIsSuccessfully(true)
      navigate("/movies");
      window.scroll(0, 0);
    } catch (error) {
      console.error("Ошибка при авторизации: ", error);
      setIsSuccessfully(false)
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditProfile = async (name, email) => {
    try {
      const res = await mainApi.setUserInfo(name, email, localStorage.jwt);
      setCurrentUser(res);
      setIsChanged(false);
      setIsSuccessfully(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.error("Ошибка редактирования пользовательских данных: ", error);
    } finally {
      setIsLoading(false);
      setIsSending(false);
    }
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.clear();
    navigate("/");
  };

  const handleDeleteMovie = async (deleteMovieId) => {
    try {
      await mainApi.deleteMovie(deleteMovieId, localStorage.jwt);
      setSavedMovies(savedMovies.filter(({ _id }) => _id !== deleteMovieId));
    } catch (error) {
      console.error("Ошибка удаления фильма: ", error);
    }
  };

  const handleSaveMovie = async (data) => {
    try {
      const added = savedMovies.some((item) => data.id === item.movieId);
      const searchThisMovie = savedMovies.filter(
        ({ movieId }) => movieId === data.id
      );

      if (added) {
        await handleDeleteMovie(searchThisMovie[0]._id);
      } else {
        const res = await mainApi.saveMovie(data, localStorage.jwt);
        setSavedMovies([res, ...savedMovies]);
      }
    } catch (error) {
      console.error("Ошибка добавления фильма: ", error);
    }
  };

  return (
    <div className="app">
      {isLoading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path="/signup"
              element={
                
                isLogged ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register
                    title="Добро пожаловать!"
                    textButton="Зарегистрироваться"
                    labelName="Имя"
                    labelEmail="E-mail"
                    labelPassword="Пароль"
                    onRegister={handleRegister}
                    isSuccessfully={isSuccessfully}
                    setIsSuccessfully={setIsSuccessfully}
                  />
                )
              }
            />
            <Route
              path="/signin"
              element={
                isLogged ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Login
                    title="Рады видеть!"
                    textButton="Войти"
                    labelEmail="E-mail"
                    labelPassword="Пароль"
                    onLogin={handleLogin}
                    isSuccessfully={isSuccessfully}
                    setIsSuccessfully={setIsSuccessfully}
                  />
                )
              }
            />
            <Route path="/" element={<Main isLogged={isLogged} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLogged={isLogged}
                  savedMovies={savedMovies}
                  onSave={handleSaveMovie}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLogged={isLogged}
                  savedMovies={savedMovies}
                  onDelete={handleDeleteMovie}
                  setIsSuccessfully={setIsSuccessfully}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isLogged={isLogged}
                  onLogout={handleLogout}
                  onEditProfile={handleEditProfile}
                  isSuccessfully={isSuccessfully}
                  setIsSuccessfully={setIsSuccessfully}
                  isError={isError}
                  isChanged={isChanged}
                  setIsChanged={setIsChanged}
                  isSending={isSending}
                  setIsSending={setIsSending}
                />
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
};

export default App;
