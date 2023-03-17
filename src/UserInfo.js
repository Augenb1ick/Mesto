export default class UserInfo {
    constructor(userNameSelector, userInfoSelector) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
    }

    getUserInfo() {
        this._userInfoObj = {};
        this._userInfoObj.userName = this._userName.textContent
        this._userInfoObj.userProf = this._userInfo.textContent

        return this._userInfoObj;
       
    }

    setUserInfo(data) {
        this._userName.textContent = data.editName
        this._userInfo.textContent = data.editInfo
    }
}
