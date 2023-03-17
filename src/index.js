import './pages/index.css';
import {buttonEditProfile, userName, userProfession, popupEditProfile, popupAddContent, 
    buttonAddContent, content, initialCards, formSettings, inputUserName, inputUserProfession
} from './constans.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

const imagePopup = new PopupWithImage('.popup-photo')

const cardList = new Section ({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, '#card-template', imagePopup.open)
        const cardElement = card.createCard()
        
        cardList.addItem(cardElement);
    },
}, '.content')

cardList.renderItems()

const profilePopup = new PopupWithForm({
    popupSelector: '.popup_edit-profile',
    handleFormSubmit: (data) => {
        const userInfo = new UserInfo('.profile__info-heading', '.profile__info-subheading')
        return userInfo.setUserInfo(data);
    }
}) 

const contentPopup = new PopupWithForm({
    popupSelector: '.popup_add-content',
    handleFormSubmit: (data) => {
        const card = new Card({name: data.name, link: data.link}, '#card-template', imagePopup.open)
        const cardElement = card.createCard()
        content.prepend(cardElement)
    }
}) 

const popupEditProfileForm = new FormValidator(formSettings, popupEditProfile);
popupEditProfileForm.enableValidation();

const popupAddContentForm = new FormValidator(formSettings, popupAddContent);
popupAddContentForm.enableValidation()


buttonEditProfile.addEventListener('click', () => {
    profilePopup.open();
    inputUserName.value = userName.textContent;
    inputUserProfession.value = userProfession.textContent;

});

buttonAddContent.addEventListener('click', () => {
    contentPopup.open();
})



