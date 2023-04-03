export default class FormValidator {
    constructor(obj, formElement) {
        this.obj = obj;
        this.formElement = formElement;
        this.inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
        this.buttonElement = formElement.querySelector(obj.submitButtonSelector);
    }
    _showInputError(inputElement, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);;
        inputElement.classList.add(this.obj.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.obj.errorClass);
    };
      
    _hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);;
        inputElement.classList.remove(this.obj.inputErrorClass);
        errorElement.classList.remove(this.obj.errorClass);
        errorElement.textContent = '';
    };
      
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };
      
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }
      
    _toggleButtonState() {
        if (this._hasInvalidInput(this.inputList)) {
          this.buttonElement.classList.add(this.obj.inactiveButtonClass);
          this.buttonElement.setAttribute('disabled', 'disabled');
        } else {
          this.buttonElement.classList.remove(this.obj.inactiveButtonClass)
          this.buttonElement.removeAttribute('disabled');
        }
    }
      
    _setEventListeners () {
        this._toggleButtonState()
      
        this.formElement.addEventListener('reset', () => {
          setTimeout(() => {
            this._toggleButtonState()
          }, 0);
        }); 
      
        this.inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
    };
      
    enableValidation() {
        this.formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        });
        this._setEventListeners();
    
    }

    resetValidation () {
      this._toggleButtonState();
      this.inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
      });
    }
}