export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector)
        this._closeButton = this._popupElement.querySelector('.popup__close-btn')
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    _handleCloseButtonOnClick = () => {
        this.close();
    }

    _setEventListeners() {
        document.addEventListener('mousedown', this._handleOverlayClose);
        document.addEventListener('keydown', this._handleEscClose);
        this._closeButton.addEventListener('click', this._handleCloseButtonOnClick)
    }

    _removeEventListeners() {
        document.removeEventListener('mousedown', this._handleOverlayClose);
        document.removeEventListener('keydown', this._handleEscClose);
        this._closeButton.removeEventListener('click', this._handleCloseButtonOnClick)
    }


    open() {
        this._popupElement.classList.add('popup_opened');
        this._setEventListeners()
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        this._removeEventListeners();
    }
}