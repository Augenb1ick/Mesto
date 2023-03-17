export default class FormValidator {
    constructor(obj, formElement) {
        this.obj = obj;
        this.formElement = formElement;
    }
    _showInputError(formElement, inputElement, errorMessage, obj) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);;
        inputElement.classList.add(obj.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(obj.errorClass);
    };
      
    _hideInputError(formElement, inputElement, obj) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);;
        inputElement.classList.remove(obj.inputErrorClass);
        errorElement.classList.remove(obj.errorClass);
        errorElement.textContent = '';
    };
      
    _checkInputValidity(formElement, inputElement, obj) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage, obj);
        } else {
            this._hideInputError(formElement, inputElement, obj);
        }
    };
      
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }
      
    _toggleButtonState(inputList, buttonElement, obj) {
        if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(obj.inactiveButtonClass);
          buttonElement.setAttribute('disabled', 'disabled');
        } else {
          buttonElement.classList.remove(obj.inactiveButtonClass)
          buttonElement.removeAttribute('disabled');
        }
    }
      
    _setEventListeners (formElement, obj) {
        const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
        const buttonElement = formElement.querySelector(obj.submitButtonSelector);
        
        this._toggleButtonState(inputList, buttonElement, obj)
      
        formElement.addEventListener('reset', () => {
          setTimeout(() => {
            this._toggleButtonState(inputList, buttonElement, obj)
          }, 0);
        }); 
      
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(formElement, inputElement, obj);
            this._toggleButtonState(inputList, buttonElement, obj);
          });
        });
    };
      
    enableValidation() {
        this.formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        });
        this._setEventListeners(this.formElement, this.obj);
    
    }
}