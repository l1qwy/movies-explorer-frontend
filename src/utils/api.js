class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
    this._token = config.headers.authorization;
  }

  _verifyRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject;
    }
  }

  getServerCards() {
    return fetch(this._url + "beatfilm-movies", {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._verifyRes);
  }

}

const api = new Api({
  baseUrl: "https://api.nomoreparties.co/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;