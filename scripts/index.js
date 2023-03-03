import {buttonEditProfile, userName, userProfession, inputUserName, inputUserProfession, inputCardLink, 
    inputCardName, closeButtons, popupEditProfile, popupAddContent, popupPhoto, popupAddForm, buttonAddContent, 
    content, popupPhotoImage, popupPhotoText, initialCards, formSettings
} from './constans.js';
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';

const popupEditProfileForm = new FormValidator(formSettings, popupEditProfile);
popupEditProfileForm.enableValidation();

const popupAddContentForm = new FormValidator(formSettings, popupAddContent);
popupAddContentForm.enableValidation()

function renderPhotoPopUp(itemName, itemLink) {
    popupPhotoImage.src = itemLink;
    popupPhotoImage.alt = 'Картинка' + itemName;
    popupPhotoText.textContent = itemName;
    openPopup(popupPhoto);
}
function createCard(item) {
    const card = new Card(item, '#card-template', renderPhotoPopUp);
    const cardElement = card.createCard();
    return cardElement;
}

initialCards.forEach((item) => {
    const cardElement = createCard(item)

    content.append(cardElement);
})


const closeOnOverlay = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target);
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

    const cardElement = createCard({ name: newName, link: newPhoto })
    
    content.prepend(cardElement);
       
    closePopup(popupAddContent);
    popupAddForm.reset(); 
};



buttonEditProfile.addEventListener('click', () => {
    inputUserName.value = userName.textContent;
    inputUserProfession.value = userProfession.textContent;
    openPopup(popupEditProfile);
});

popupEditProfile.addEventListener('submit', submitEditProfileForm);

buttonAddContent.addEventListener('click', () => {
    openPopup(popupAddContent);
});

popupAddForm.addEventListener('submit', submitAddContentForm);

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    console.log(popup)
    button.addEventListener('click', () => closePopup(popup));
});






