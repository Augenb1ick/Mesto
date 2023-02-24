const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const userName = document.querySelector('.profile__info-heading');
const userProfession = document.querySelector('.profile__info-subheading');
const inputUserName = document.querySelector('.popup__text_type_name');
const inputUserProfession = document.querySelector('.popup__text_type_profession');
const inputCardLink = document.querySelector('.popup__text-image')
const inputCardName = document.querySelector('.popup__text-name')
const buttonCloseEditProfile = document.querySelector('.popup__close-btn');
const buttonCloseAddContent = document.querySelector('#add-content-close-btn');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddContent = document.querySelector('.popup_add-content');
const popupPhoto = document.querySelector('.popup-photo');
const popupAddForm = document.querySelector('#add-content');
const buttonAddContent = document.querySelector('.profile__info-add-button');
const template = document.querySelector('#card-template').content.querySelector('.content__container');
const content = document.querySelector('.content');
const popupPhotoImage = document.querySelector('.popup-photo__image');
const popupPhotoText = document.querySelector('.popup-photo__text');
const popupPhotoCloseBtn = document.querySelector('#popup-photo-close-btn');
const initialCards = [
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

    const card = createCard({ name: newName, link: newPhoto });
    
    content.prepend(card);
       
    closePopup(popupAddContent);
    popupAddForm.reset(); 
};

function renderInitialCards() {
    const cards = initialCards.map((item) => {
        return createCard(item);
    });

    content.append(...cards);
};

function createCard(item) {
    const card = template.cloneNode(true);
    const contentImage = card.querySelector('.content__image');
    contentImage.src = item.link;
    contentImage.alt = 'Картинка ' + item.name;
    card.querySelector('.content__text').textContent = item.name;
    card.querySelector('.content__like-button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('content__like-button_type_active');
    });
    card.querySelector('.content__delete-button').addEventListener('click', () => {
        card.remove();
    });
    
    contentImage.addEventListener('click', () => {
        renderPhotoPopUp(item);
    });
    
    return card;

};

function renderPhotoPopUp(item) {
    popupPhotoImage.src = item.link;
    popupPhotoImage.alt = 'Картинка' + item.name;
    popupPhotoText.textContent = item.name;
    openPopup(popupPhoto);
}

renderInitialCards();

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





