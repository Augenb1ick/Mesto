export default class UserInfo {
    constructor(userNameSelector, userInfoSelector, userAvatarSelector) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
        this.userAvatar = document.querySelector(userAvatarSelector)
    }

    getUserInfo() {
        this._userInfoObj = {};
        this._userInfoObj.userName = this._userName.textContent
        this._userInfoObj.userProf = this._userInfo.textContent

        return this._userInfoObj;
       
    }

    setUserInfo({name, about}) {
        this._userName.textContent = name
        this._userInfo.textContent = about
    }

    setUserAvatar(link) {
        this.userAvatar.src = link
    }
}
