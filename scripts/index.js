let editButton = document.querySelector('.profile__info-edit-button');
let theName = document.querySelector('.profile__info-heading');
let theProfession = document.querySelector('.profile__info-subheading');
let newName = document.querySelector('.popup__text_type_name');
let newProfession = document.querySelector('.popup__text_type_profession');
let newCardPhoto = document.querySelector('#new-card-photo')
let newCardName = document.querySelector('#new-card-name')
let closeButton = document.querySelector('.popup__close-btn');
let addContentCloseBtn = document.querySelector('#add-content-close-btn');
let popup = document.querySelector('.popup');
let popupAdd = document.querySelector('#popup-add-content')
let popupForm = document.querySelector('.popup__content');
let popupAddForm = document.querySelector('#add-content');
let likeButtons = document.querySelectorAll('.content__like-button');
let addContentButton = document.querySelector('.profile__info-add-button');
const template = document.querySelector('#card-template').content.querySelector('.content__container');
const content = document.querySelector('.content');


function popUp() {
    popup.classList.add('popup_opened')
    
    newName.value = theName.textContent;
    newProfession.value = theProfession.textContent;
}

function popUpClose() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();

    theName.textContent = newName.value;
    theProfession.textContent = newProfession.value;

    popUpClose();
}

function openPopUPadd() {
    popupAdd.classList.add('popup_opened');
}

function closePopUPadd() {
    popupAdd.classList.remove('popup_opened');
}

function submitPopUpAdd(evt) {
    evt.preventDefault();

    const newPhoto = newCardPhoto.value;
    const newName = newCardName.value;

    const card = createCard({ name: newName, link: newPhoto });
    
    content.prepend(card);
       
    closePopUPadd();
    popupAddForm.reset(); 
}

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

function renderContent() {
    const cards = initialCards.map((item) => {
        return createCard(item);
    });

    content.append(...cards);
}

function createCard(item) {
    const card = template.cloneNode(true);
    card.querySelector('.content__text').textContent = item.name;
    card.querySelector('.content__image').src = item.link;
    card.querySelector('.content__image').alt = 'Картинка ' + item.name;
    card.querySelector('.content__like-button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('content__like-button_type_active');
    });
    card.querySelector('.content__delete-button').addEventListener('click', () => {
        card.remove();
    });
    
    card.querySelector('.content__image').addEventListener('click', () => {
        openPhotopopUp(item);
        
    });
    
    return card;
}

function openPhotopopUp(item) {
    console.log(item);
    document.querySelector('.popup-photo__image').src = item.link;
    document.querySelector('.popup-photo__text').textContent = item.name;
    document.querySelector('#popup-photo-close-btn').addEventListener('click', () => {
        document.querySelector('.popup-photo').classList.remove('popup-photo_opened');
    });
    document.querySelector('.popup-photo').classList.add('popup-photo_opened')
}

renderContent();
addContentButton.addEventListener('click', openPopUPadd);
addContentCloseBtn.addEventListener('click', closePopUPadd);
popupAddForm.addEventListener('submit', submitPopUpAdd);

editButton.addEventListener('click', popUp);
closeButton.addEventListener('click', popUpClose);
popupForm.addEventListener('submit', handleFormSubmit);




