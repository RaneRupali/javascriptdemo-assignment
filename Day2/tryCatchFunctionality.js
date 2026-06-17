async function login(){
    throw new Error("Login Failed");
}
async function execute(){
    try {
        await login(); 
    } catch (error) {
        console.log("Error:", error.message);
    }
}
execute();