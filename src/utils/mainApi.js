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

  saveMovie = (movie, token) => {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
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
      })
    }).then(response => response.json())
  }


}

const mainApi = new MainApi({
  baseUrl: "http://localhost:3000",
});

export default mainApi;