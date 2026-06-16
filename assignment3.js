const existingUsername = "rupali48";
const existingPassword = "Welcome12345";

let addedUsername = "rupali4896";
let addedPassword = "Welcome@123";

//Compare both the credentials
const correctUsername = (existingUsername === addedUsername);
console.log("Is Username Correct?", correctUsername); 
const incorrectPassword = (existingPassword !== addedPassword);
console.log("Is Password Incorrect?", incorrectPassword);

if (existingUsername === addedUsername && existingPassword === addedPassword) {
    console.log("Login successful!");
} else {
    console.log("Login failed.");
}