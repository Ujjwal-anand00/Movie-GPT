export const CheckValidData=(email,password)=>{
// check email and password and validate it if it isnot validated send me a error message 

const isEmailValid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordvalid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
if(!isEmailValid) return "Email id is not Valid ";
if(!isPasswordvalid) return "Password is not valid";

return null;


};