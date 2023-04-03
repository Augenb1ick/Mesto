export default class Card {
    constructor({cardData, templateId, handleCardClick, handleDeleteIconClick, 
        userID, handleDeleteLike, handleAddLike}) {
        this.cardName = cardData.name;
        this.cardLink = cardData.link;
        this.cardLikes = cardData.likes.length;
        this.cardId = cardData._id;
        this.cardLikesId = cardData.likes._id;
        this.cardLikesArr = cardData.likes;
        this.cardOwnerId = cardData.owner._id;
        this.templateId = templateId;
        this.handleCardClick = handleCardClick;
        this.handleDeleteIconClick = handleDeleteIconClick;
        this.handleDeleteLike = handleDeleteLike;
        this.handleAddLike = handleAddLike;
        this.userID = userID;
        this.activeLikeBtnSelector = 'content__like-button_type_active';
        this.deleteBtnHiddenSelector = 'content__delete-button_type_hidden';
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this.templateId)
          .content
          .querySelector('.content__container')
          .cloneNode(true);
        return cardElement;
    }

    _toggleLike(evt) {
        evt.target.classList.toggle(this.activeLikeBtnSelector); 
    }
    
    deleteCard = () => {
        this.element.remove()
    }

    _handleImageClick = () => {
        this.handleCardClick(this.cardName, this.cardLink);
    }

    _checkLike(likeButton) {
        this.cardLikesArr.forEach((item) => {
            if (item._id === this.userID) {
                likeButton.classList.add(this.activeLikeBtnSelector)
            }
        })   
    }

    _checkOwner(deleteButton) {
       if (this.cardOwnerId === this.userID) {
            deleteButton.classList.remove(this.deleteBtnHiddenSelector)
        } else {
            deleteButton.classList.add(this.deleteBtnHiddenSelector)
        }

    }

    _setEventListeners(likeButton, deleteButton, image, likeCounter) {
        likeButton.addEventListener('click', (evt) => {
            if (!evt.target.classList.contains(this.activeLikeBtnSelector)) {
                this.handleAddLike(this.cardId).then((data) => {
                    likeCounter.textContent = data.likes.length
                    this._toggleLike(evt)
                })
                .catch((err) => console.log(err))
            } else {
                this.handleDeleteLike(this.cardId).then((data) => {
                    likeCounter.textContent = data.likes.length
                    this._toggleLike(evt)
                })
                .catch((err) => console.log(err))
            }
        });

        deleteButton.addEventListener('click', () => this.handleDeleteIconClick(this))

        image.addEventListener('click', this._handleImageClick);
    }

    createCard() {
        this.element = this._getTemplate();
        this._cardImage = this.element.querySelector('.content__image');
        this._deleteButton = this.element.querySelector('.content__delete-button')
        this._likeButton = this.element.querySelector('.content__like-button')
        this._likeCounter = this.element.querySelector('.content__likes-counter')

        this._cardImage.src = this.cardLink
        this.element.querySelector('.content__text').textContent = this.cardName
        this._cardImage.alt = 'Картинка ' + this.cardName;
        this._likeCounter.textContent = this.cardLikes

        this._setEventListeners(this._likeButton, this._deleteButton, this._cardImage, this._likeCounter)
        this._checkOwner(this._deleteButton)
        this._checkLike(this._likeButton)

        return this.element;
    }

}