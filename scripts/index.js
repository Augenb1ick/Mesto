let likeButtons = document.querySelectorAll('.content__like-image');
let editButton = document.querySelector('.profile__info-edit-button');
let theName = document.querySelector('.profile__info-heading');
let profession = document.querySelector('.profile__info-subheading');
let SubmitButton = document.querySelector('.pop-up__submit-btn');
let newName = document.querySelector('.pop-up__text_type_name');
let newProfession = document.querySelector('.pop-up__text_type_profession');
let closeButton = document.querySelector('.pop-up__close-btn');
let popup = document.querySelector('.pop-up');

likeButtons.forEach(function(likeButton) {
    likeButton.onclick = function(event) {
        event.target.classList.toggle('content__like-image_type_active');
    }
})

function PopUp() {
    popup.classList.add('pop-up_opened')
    
    newName.value = theName.innerHTML;
    newProfession.value = profession.innerHTML;

    closeButton.addEventListener('click', PopUpClose);
    SubmitButton.addEventListener('click', SubmitClick);
    popup.addEventListener('submit', handleFormSubmit);
}

editButton.addEventListener('click', PopUp);

function PopUpClose() {
    popup.classList.remove('pop-up_opened');
}

function SubmitClick() {
    theName.innerHTML = newName.value;
    profession.innerHTML = newProfession.value;

    PopUpClose();
}

function handleFormSubmit(evt) {
    evt.preventDefault();

    theName.innerHTML = newName.value;
    profession.innerHTML = newProfession.value;

    PopUpClose();
}





