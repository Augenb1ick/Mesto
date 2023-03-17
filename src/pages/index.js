import './index.css';
import {buttonEditProfile, userName, userProfession, popupEditProfile, popupAddContent, 
    buttonAddContent, content, initialCards, formSettings, inputUserName, inputUserProfession
} from '../components/constans.js';
import FormValidator from '../components/FormValidator.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const createCard = (item) => {
    const card = new Card(item, '#card-template', imagePopup.open)
    const cardElement = card.createCard()
    return cardElement
}
const userInfo = new UserInfo('.profile__info-heading', '.profile__info-subheading')
const imagePopup = new PopupWithImage('.popup-photo')

const cardList = new Section ({
    items: initialCards,
    renderer: (item) => {        
        cardList.addItem(createCard(item));
    },
}, '.content')

cardList.renderItems()

const profilePopup = new PopupWithForm({
    popupSelector: '.popup_edit-profile',
    handleFormSubmit: (data) => {
        return userInfo.setUserInfo(data);
    }
}) 

const contentPopup = new PopupWithForm({
    popupSelector: '.popup_add-content',
    handleFormSubmit: (item) => {
        cardList.addItemToStart(createCard(item))
    }
}) 

const popupEditProfileForm = new FormValidator(formSettings, popupEditProfile);
popupEditProfileForm.enableValidation();

const popupAddContentForm = new FormValidator(formSettings, popupAddContent);
popupAddContentForm.enableValidation()


buttonEditProfile.addEventListener('click', () => {
    profilePopup.open();

    const infoObject = userInfo.getUserInfo();
    inputUserName.value = infoObject.userName;
    inputUserProfession.value = infoObject.userProf;     

    popupEditProfileForm.resetValidation();
});

buttonAddContent.addEventListener('click', () => {
    contentPopup.open();
    popupAddContentForm.resetValidation();
})



