class Api {
    constructor(options) {
        this.options = options;
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-63/cards', {
            headers: {
             authorization: 'ea85f908-fad7-4aa4-beb6-cef41fe19df2'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch((err) => {
            console.log(err);
        });     
    }

    getUserInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-63/users/me/', {
            headers: {
             authorization: 'ea85f908-fad7-4aa4-beb6-cef41fe19df2'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    editProfileInfo(profileName, profileInfo) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-63/users/me', {
            method: 'PATCH',
            headers: {
                authorization: 'ea85f908-fad7-4aa4-beb6-cef41fe19df2',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${profileName}`,
                about: `${profileInfo}`
            }) 
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    editAvatar(avatarLink) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-63/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: 'ea85f908-fad7-4aa4-beb6-cef41fe19df2',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: `${avatarLink}`,
              }) 
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    postCard(CardName, CardLink) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-63/cards', {
            method: 'POST',
            headers: {
                authorization: 'ea85f908-fad7-4aa4-beb6-cef41fe19df2',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: CardName,
                link: CardLink
              })    
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    deleteCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-63/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: 'ea85f908-fad7-4aa4-beb6-cef41fe19df2',
            } 
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch((err) => {
            console.log(err);
        });          
    }

    addLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-63/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: 'ea85f908-fad7-4aa4-beb6-cef41fe19df2',
            } 
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    deleteLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-63/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: 'ea85f908-fad7-4aa4-beb6-cef41fe19df2',
            } 
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
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