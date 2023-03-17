import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupElement = document.querySelector(popupSelector)
        this._popupElementImage = this._popupElement.querySelector('.popup-photo__image')
        this._popupElementText = this._popupElement.querySelector('.popup-photo__text')
    }

    open = (name, link) => {
        this._popupElementImage.src = link;
        this._popupElementImage.alt = 'Картинка' + name;
        this._popupElementText.textContent = name;
        super.open();
    }

}