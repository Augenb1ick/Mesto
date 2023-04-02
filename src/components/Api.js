class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse = (res) => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getInitialCards = () => {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => this._checkResponse(res))
        .catch((err) => {console.log(err)});     
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me/`, {
            headers: this._headers
        })
        .then(res => this._checkResponse(res))
        .catch((err) => {console.log(err)});
    }

    editProfileInfo(profileName, profileInfo) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: `${profileName}`,
                about: `${profileInfo}`
            }) 
        })
        .then(res => this._checkResponse(res))
        .catch((err) => {console.log(err)});
    }

    editAvatar(avatarLink) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: `${avatarLink}`,
              }) 
        })
        .then(res => this._checkResponse(res))
        .catch((err) => {console.log(err)});
    }
    
    postCard(CardName, CardLink) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: CardName,
                link: CardLink
              })    
        })
        .then(res => this._checkResponse(res))
        .catch((err) => {console.log(err)});
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers 
        })
        .then(res => this._checkResponse(res))
        .catch((err) => {console.log(err)});         
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers 
        })
        .then(res => this._checkResponse(res))
        .catch((err) => {console.log(err)});
    }
    
    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers 
        })
        .then(res => this._checkResponse(res))
        .catch((err) => {
            console.log(err);
        });
    }    
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'ea85f908-fad7-4aa4-beb6-cef41fe19df2',
    'Content-Type': 'application/json'
  }
}); 