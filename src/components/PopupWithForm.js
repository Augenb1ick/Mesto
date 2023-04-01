import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._popupElement = document.querySelector(popupSelector)
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector('.popup__content')
        this._inputList = this._formElement.querySelectorAll('.popup__text')
        this._submitButton = this._formElement.querySelector('.popup__submit-btn')
        this._submitButtonInitialText = this._submitButton.textContent
    }

    _getInputValues() {
        this._formValues = {};

        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    _handleFormSubmitMethod = (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    }

    _setEventListeners() {
        super._setEventListeners();
        this._formElement.addEventListener('submit', this._handleFormSubmitMethod)
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this._formElement.removeEventListener('submit', this._handleFormSubmitMethod)
    }

    showLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent += '...'
        } else {
            this._submitButton.textContent = this._submitButtonInitialText
        }
        
    }
    
    close () {
        super.close();
        this._formElement.reset()
    }
}