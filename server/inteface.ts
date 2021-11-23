interface UserInt { 
    fullname: string; 
    email: string
    gender: string; 
    phone: string; 
    address: string; 
    role: string; 
}
interface ErrorInt { 
    success:boolean
    status:number;
    message: string; 
    data: object;
}

export { UserInt, ErrorInt };  