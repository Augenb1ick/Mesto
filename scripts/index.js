let editButton = document.querySelector('.profile__info-edit-button');
let theName = document.querySelector('.profile__info-heading');
let theProfession = document.querySelector('.profile__info-subheading');
let newName = document.querySelector('.popup__text_type_name');
let newProfession = document.querySelector('.popup__text_type_profession');
let closeButton = document.querySelector('.popup__close-btn');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__content')


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

editButton.addEventListener('click', popUp);
closeButton.addEventListener('click', popUpClose);
popupForm.addEventListener('submit', handleFormSubmit);


// функция активации кнопки лайка, которую видимо нужно реализовать в следующем проекте. (хоть и в фигме есть такое состояние кнопки)
// let likeButtons = document.querySelectorAll('.content__like-button')
// likeButtons.forEach(function(likeButton) {
//     likeButton.onclick = function(event) {
//         event.target.classList.toggle('.content__like-button_type_active');
//     }
// })





