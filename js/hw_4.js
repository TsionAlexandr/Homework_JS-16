// Задача 4.


function User(name , regDate) {
    this.name = name;
    this.regDate = regDate;
}
User.prototype.getInfo = function() {
    return {name: this.name, regDate: this.regDate};
};


function Admin(name, regDate) {
    User.apply(this, arguments);
    this._superAdmin = true;
}
Admin.prototype.constructor = Admin;

Admin.getInfo = function() {
    const userInfo = User.prototype.getInfo.apply(this, arguments);
    userInfo.superAdmin = this._superAdmin;
    return userInfo;
};


function Guest(name, regDate) {
    User.apply(this, arguments);
    this.validDate = validDate;
}
Guest.prototype.constructor = Guest;

Guest.prototype.getInfo = function() {
    const userInfo = User.prototype.getInfo.apply(this, arguments);
    userInfo.validDate = this.validDate;
    return userInfo;
};


const admin = new Admin('Vlad', '03.06.2016');
const guest = new Guest('Alex', '11.10.2018');