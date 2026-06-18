import {login} from './reusableLogin1.js';

const username = "Rupali";
const password = "Wel12345";

if(login(username,password)){
    console.log("User logged in successfully")
}
else{
    console.log("User is not Logged In");
}