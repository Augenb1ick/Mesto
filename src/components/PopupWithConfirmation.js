import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {

    setConfirmAction(action) {
        this._handleFormSubmit = action
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit()
        })
    }

}