import {login} from './reusableLogin1.js';

const username="Rupali";
const password="Welcome123";

if(login(username,password)){
console.log("Login Successfull!!");}
else{
console.log("Login Unsuccessfull!!");
}