import {buttonEditProfile, userName, userProfession, inputUserName, inputUserProfession, inputCardLink, 
    inputCardName, buttonCloseEditProfile, buttonCloseAddContent, popupEditProfile, popupAddContent, 
    popupPhoto, popupAddForm, buttonAddContent, content, popupPhotoImage, popupPhotoText,
    popupPhotoCloseBtn, initialCards, formSettings
} from './constans.js';
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';

const popupEditProfileForm = new FormValidator(formSettings, popupEditProfile);
popupEditProfileForm.enableValidation();

const popupAddContentForm = new FormValidator(formSettings, popupAddContent);
popupAddContentForm.enableValidation()

initialCards.forEach((item) => {
    const card = new Card(item, '#card-template', renderPhotoPopUp);
    const cardElement = card.createCard()

    content.append(cardElement);
})

const closeOnOverlay = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};

const closeOnEscape = (evt) => {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};

function openPopup(currentPopup) {
    currentPopup.classList.add('popup_opened');

    document.addEventListener('mousedown', closeOnOverlay);
    document.addEventListener('keydown', closeOnEscape);
};

function closePopup(currentPopup) {
    currentPopup.classList.remove('popup_opened');

    document.removeEventListener('mousedown', closeOnOverlay);
    document.removeEventListener('keydown', closeOnEscape);
};

function submitEditProfileForm(evt) {
    evt.preventDefault();

    userName.textContent = inputUserName.value;
    userProfession.textContent = inputUserProfession.value;

    closePopup(popupEditProfile);
};

function submitAddContentForm(evt) {
    evt.preventDefault();

    const newPhoto = inputCardLink.value;
    const newName = inputCardName.value;

    const card = new Card({ name: newName, link: newPhoto }, '#card-template', renderPhotoPopUp);
    const cardElement = card.createCard()
    
    content.prepend(cardElement);
       
    closePopup(popupAddContent);
    popupAddForm.reset(); 
};

function renderPhotoPopUp(itemName, itemLink) {
    popupPhotoImage.src = itemLink;
    popupPhotoImage.alt = 'Картинка' + itemName;
    popupPhotoText.textContent = itemName;
    openPopup(popupPhoto);
}

buttonEditProfile.addEventListener('click', () => {
    inputUserName.value = userName.textContent;
    inputUserProfession.value = userProfession.textContent;
    openPopup(popupEditProfile);
});

buttonCloseEditProfile.addEventListener('click', () => {
    closePopup(popupEditProfile);
});

popupEditProfile.addEventListener('submit', submitEditProfileForm);

buttonAddContent.addEventListener('click', () => {
    openPopup(popupAddContent);
});

buttonCloseAddContent.addEventListener('click', () => {
    closePopup(popupAddContent);
});

popupAddForm.addEventListener('submit', submitAddContentForm);

popupPhotoCloseBtn.addEventListener('click', () => {
    closePopup(popupPhoto);
});





