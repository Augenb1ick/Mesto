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

    setUserInfo(data) {
        this._userName.textContent = data.name
        this._userInfo.textContent = data.about
    }

    setUserAvatar(link) {
        this.userAvatar.src = link
    }
}
