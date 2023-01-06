let likeButtons = document.querySelectorAll('.content__like-image');
let PopUpContainer = document.querySelector('.pop-up-container');
let editButton = document.querySelector('.profile__info-edit-button');
let theName = document.querySelector('.profile__info-heading');
let profession = document.querySelector('.profile__info-subheading');
let SubmitButton;
let newName;
let newProfession;
let closeButton;
let popupForm;

likeButtons.forEach(function(likeButton) {
    likeButton.onclick = function(event) {
        event.target.classList.toggle('content__like-image_type_active');
    }
})

function PopUp() {
    PopUpContainer.innerHTML = `
        <form class="pop-up" tabindex="2">
            <div class="pop-up__content">
                <h2 class="pop-up__heading">Редактировать профиль</h2>
                <input type="text" class="pop-up__text pop-up__text_type_name" value="${theName.innerHTML}">
                <input type="text" class="pop-up__text pop-up__text_type_profession" value="${profession.innerHTML}">
                <button class="pop-up__submit-btn" type="submit">Сохранить</button>
            </div>
            <button class="pop-up__close-btn" type="button" tabindex="3"></button>
        </form>
    `;
    PopUpContainer.classList.add('pop-up-bg');

    popupForm = document.querySelector('.pop-up');
    SubmitButton = document.querySelector('.pop-up__submit-btn');
    newName = document.querySelector('.pop-up__text_type_name');
    newProfession = document.querySelector('.pop-up__text_type_profession');
    closeButton = document.querySelector('.pop-up__close-btn');

    closeButton.addEventListener('click', PopUpClose);
    SubmitButton.addEventListener('click', SubmitClick);
    popupForm.addEventListener('submit', handleFormSubmit);
}

editButton.addEventListener('click', PopUp);

function PopUpClose() {
    PopUpContainer.innerHTML = '';
    PopUpContainer.classList.remove('pop-up-bg');
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





