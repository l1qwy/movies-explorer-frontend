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

  getServerCards() {
    return fetch(this._url + "beatfilm-movies").then(this._verifyRes);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/",
});

export default moviesApi;