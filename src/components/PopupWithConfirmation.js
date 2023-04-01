import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._popupElement = document.querySelector(popupSelector)
    }

    setConfirmAction(action) {
        this._handleFormSubmit = action
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit()
        })
        super._setEventListeners();
    }

    close() {
        super.close()
    }

}