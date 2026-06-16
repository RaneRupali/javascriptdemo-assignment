function loginFunctionality(existingUsername, existingPassword) {
    
    const validUsername = "rupali48";
    const validPassword = "Welcome@123";

    if (existingUsername === validUsername && existingPassword === validPassword) {
        return "Success";
    } else {
        return "Failure";
    }
}

console.log('Login status:', loginFunctionality("rupali48", "Welcome@123")); 
console.log('Login status:', loginFunctionality("rup12", "Wel123")); 