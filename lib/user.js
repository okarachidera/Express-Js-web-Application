"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(user) {
        this.fullname = user.fullname;
        this.email = user.email;
        this.gender = user.gender;
        this.phone = user.phone;
        this.address = user.address;
        this.role = user.role;
    }
}
exports.default = User;
