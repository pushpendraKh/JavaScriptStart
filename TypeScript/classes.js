var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(nameValue, emailValue, ageValue) {
        this.name = nameValue;
        this.email = emailValue;
        this.age = ageValue;
        console.log(this.name + " is a new User");
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(idValue, nameValue, emailValue, ageValue) {
        var _this = _super.call(this, nameValue, emailValue, ageValue) || this;
        _this.id = idValue;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(1, "Mike Traynor", "mike.traynor@gmail.com", 22);
mike.register();
mike.payInvoice();
