export const buttonEditProfile = document.querySelector('.profile__info-edit-button');
export const userName = document.querySelector('.profile__info-heading');
export const userProfession = document.querySelector('.profile__info-subheading');
export const inputUserName = document.querySelector('.popup__text_type_name');
export const inputUserProfession = document.querySelector('.popup__text_type_profession');
export const inputCardLink = document.querySelector('.popup__text-image')
export const inputCardName = document.querySelector('.popup__text-name')
export const buttonCloseEditProfile = document.querySelector('.popup__close-btn');
export const buttonCloseAddContent = document.querySelector('#add-content-close-btn');
export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupAddContent = document.querySelector('.popup_add-content');
export const popupPhoto = document.querySelector('.popup-photo');
export const popupAddForm = document.querySelector('#add-content');
export const buttonAddContent = document.querySelector('.profile__info-add-button');
export const content = document.querySelector('.content');
export const popupPhotoImage = document.querySelector('.popup-photo__image');
export const popupPhotoText = document.querySelector('.popup-photo__text');
export const popupPhotoCloseBtn = document.querySelector('#popup-photo-close-btn');
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const formSettings = {
  formSelector: '.popup__content',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_active'
};