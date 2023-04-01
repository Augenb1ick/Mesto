import './index.css';
import {buttonEditProfile, popupEditProfile, popupAddContent, userName, userProfession, buttonEditAvatar,
    buttonAddContent, formSettings, inputUserName, inputUserProfession, popupEditAvatar
} from '../components/constans.js';
import FormValidator from '../components/FormValidator.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import {api} from '../components/Api';

const popupWithConfirmation = new PopupWithConfirmation('.popup_delete-content')
popupWithConfirmation.setEventListeners();

api.getUserInfo().then((data) => {
    userInfo.setUserAvatar(data.avatar)
    userInfo.setUserInfo(data)
})


const createCard = (item) => {
    const card = new Card({
        cardData: item, 
        templateId: '#card-template', 
        handleCardClick: imagePopup.open,
        handelDeleteIconClick: (card) => {
            popupWithConfirmation.open();
            popupWithConfirmation.setConfirmAction(() => {
                api.deleteCard(card.cardId).then(() => {
                    card.deleteCard();
                    popupWithConfirmation.close();
                })
                .catch((err) => console.log(err))
            })
        }
    })
    const cardElement = card.createCard()
    return cardElement
}


const userInfo = new UserInfo('.profile__info-heading', '.profile__info-subheading', '.profile__image');
const imagePopup = new PopupWithImage('.popup-photo');

const cardList = new Section ({
    items: {},
    renderer: () => {},
}, '.content')



api.getInitialCards().then(data => {
    const InitialcardList = new Section ({
    items: data,
    renderer: (item) => {        
        cardList.addItem(createCard(item));
    },
}, '.content')
InitialcardList.renderItems()
})



const profilePopup = new PopupWithForm({
    popupSelector: '.popup_edit-profile',
    handleFormSubmit: (item) => {
        profilePopup.showLoading(true);
        api.editProfileInfo(item.editName, item.editInfo).then(res => {
            userInfo.setUserInfo(res)
            profilePopup.close()
        })
        .finally(() => {profilePopup.showLoading(false)})
        
    }
})


const contentPopup = new PopupWithForm({
    popupSelector: '.popup_add-content',
    handleFormSubmit: (item) => {
        contentPopup.showLoading(true);
        api.postCard(item.name, item.link).then(res => {
            cardList.addItemToStart(createCard(res))
            contentPopup.close()
        })
        .finally(() => {contentPopup.showLoading(false)})
        
    }
})

const avatarPopup = new PopupWithForm ({
    popupSelector: '.popup_edit-avatar',
    handleFormSubmit: (item) => {
        avatarPopup.showLoading(true);
        api.editAvatar(item.editAvatar).then((res) => {
            avatarPopup.close()
            userInfo.setUserAvatar(res.avatar)
        })
        .finally(() => {avatarPopup.showLoading(false)})
    }
})



const popupEditProfileForm = new FormValidator(formSettings, popupEditProfile);
popupEditProfileForm.enableValidation();

const popupAddContentForm = new FormValidator(formSettings, popupAddContent);
popupAddContentForm.enableValidation()

const popupEditAvatarForm = new FormValidator(formSettings, popupEditAvatar);
popupEditAvatarForm.enableValidation()


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

buttonEditAvatar.addEventListener('click', () => {
    avatarPopup.open();
    popupEditAvatarForm.resetValidation();
})



