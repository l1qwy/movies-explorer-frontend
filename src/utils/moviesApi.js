class MoviesApi {
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

  getServerMovies() {
    return fetch(this._url).then(this._verifyRes);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
