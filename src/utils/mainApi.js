class MainApi {
  constructor(config) {
    this._url = config.baseUrl;
  }

  _verifyRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  registration(name, email, password) {
    return fetch(`${this._url}signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._verifyRes);
  }

  authorization(email, password) {
    return fetch(`${this._url}signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._verifyRes);
  }

  getUserInfo(token) {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }).then(this._verifyRes);
  }

  setUserInfo(name, email, token) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._verifyRes);
  }

  getMainMovies(token) {
    return fetch(`${this._url}movies`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }).then(this._verifyRes);
  }

  saveMovie(movie, token) {
    return fetch(`${this._url}movies`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._verifyRes);
  }

  deleteMovie = (movieId, token) => {
    return fetch(`${this._url}movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }).then(this._verifyRes);
  };
}

const mainApi = new MainApi({
  baseUrl: "api.liqwymovies.nomoredomainsrocks.ru/",
});

export default mainApi;
