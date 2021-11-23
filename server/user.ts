import { UserInt } from "./inteface";


class  User{
    fullname: string; 
    email: string
    gender: string; 
    phone: string; 
    address: string; 
    role: string; 
    constructor(user: UserInt) {
        this.fullname = user.fullname;
        this.email = user.email;
        this.gender = user.gender;
        this.phone = user.phone
        this.address = user.address;
        this.role = user.role
    }
}

export default User