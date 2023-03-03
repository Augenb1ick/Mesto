export class Card {
    constructor(cardData, templateId, callBack) {
        this.cardName = cardData.name;
        this.cardLink = cardData.link
        this.templateId = templateId;
        this.callBack = callBack;
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

    _deleteCard(evt) {
        evt.target.closest('.content__container').remove()
    }

    _handleImageClick = () => {
        this.callBack(this.cardName, this.cardLink);
    }


    _setEventListeners(cardElement) {
        cardElement.querySelector('.content__like-button').addEventListener('click', this._toggleLike);

        cardElement.querySelector('.content__delete-button').addEventListener('click', this._deleteCard);

        cardElement.querySelector('.content__image').addEventListener('click', this._handleImageClick);
    }

    createCard() {
        this.element = this._getTemplate();
        this._cardImage = this.element.querySelector('.content__image');

        this._cardImage.src = this.cardLink
        this.element.querySelector('.content__text').textContent = this.cardName
        this._cardImage.alt = 'Картинка ' + this.cardName;

        this._setEventListeners(this.element)
        
        return this.element;
    }

}