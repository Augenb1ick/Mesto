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

    _setEventListeners(cardElement) {
        cardElement.querySelector('.content__like-button').addEventListener('click', (evt) => {
            evt.target.classList.toggle('content__like-button_type_active');
        });
        cardElement.querySelector('.content__delete-button').addEventListener('click', () => {
            cardElement.remove();
        });

        cardElement.querySelector('.content__image').addEventListener('click', () => {
            this.callBack(this.cardName, this.cardLink);
        })
    }

    createCard() {
        this.element = this._getTemplate();

        this.element.querySelector('.content__image').src = this.cardLink
        this.element.querySelector('.content__text').textContent = this.cardName
        this.element.querySelector('.content__image').alt = 'Картинка ' + this.cardName;

        this._setEventListeners(this.element)
        
        return this.element;
    }

}