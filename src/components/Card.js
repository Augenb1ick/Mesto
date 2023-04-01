import {api} from '../components/Api';

export default class Card {
    constructor({cardData, templateId, handleCardClick, handelDeleteIconClick}) {
        this.cardName = cardData.name;
        this.cardLink = cardData.link;
        this.cardLikes = cardData.likes.length;
        this.cardId = cardData._id;
        this.cardLikesId = cardData.likes._id;
        this.cardLikesArr = cardData.likes;
        this.cardOwnerId = cardData.owner._id;
        this.templateId = templateId;
        this.handleCardClick = handleCardClick;
        this.handelDeleteIconClick = handelDeleteIconClick;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this.templateId)
          .content
          .querySelector('.content__container')
          .cloneNode(true);
        return cardElement;
    }

    _toggleLike(evt) {
        evt.target.classList.toggle('content__like-button_type_active'); 
    }
    
    _addLIke(cardId) {
        return api.addLike(cardId)
    }

    _deleteLike(cardId) {
        return api.deleteLike(cardId)
    }

    deleteCard = () => {
        this.element.remove()
    }

    _handleImageClick = () => {
        this.handleCardClick(this.cardName, this.cardLink);
    }

    _checkLike(cardElement) {
        this.cardLikesArr.forEach((item) => {
            if (item._id === 'd8077e49c5c1f1aceee11c6d') {
                cardElement.querySelector('.content__like-button').classList.add('content__like-button_type_active')
            }
        })   
    }

    _checkOwner(cardElement) {
       if (this.cardOwnerId === 'd8077e49c5c1f1aceee11c6d') {
            cardElement.querySelector('.content__delete-button').classList.remove('content__delete-button_type_hidden')
        } else {
            cardElement.querySelector('.content__delete-button').classList.add('content__delete-button_type_hidden')
        }

    }

    _setEventListeners(cardElement) {
        cardElement.querySelector('.content__like-button').addEventListener('click', (evt) => {
            if (!evt.target.classList.contains('content__like-button_type_active')) {
                this._addLIke(this.cardId).then((data) => {
                    cardElement.querySelector('.content__likes-counter').textContent = data.likes.length
                })
            } else {
                this._deleteLike(this.cardId).then((data) => {
                    cardElement.querySelector('.content__likes-counter').textContent = data.likes.length
                })
            }
            this._toggleLike(evt)
        });

        cardElement.querySelector('.content__delete-button').addEventListener('click', () => this.handelDeleteIconClick(this))

        cardElement.querySelector('.content__image').addEventListener('click', this._handleImageClick);
    }

    createCard() {
        this.element = this._getTemplate();
        this._cardImage = this.element.querySelector('.content__image');

        this._cardImage.src = this.cardLink
        this.element.querySelector('.content__text').textContent = this.cardName
        this._cardImage.alt = 'Картинка ' + this.cardName;
        this.element.querySelector('.content__likes-counter').textContent = this.cardLikes

        this._setEventListeners(this.element)
        this._checkLike(this.element)
        this._checkOwner(this.element)
        return this.element;
    }

}