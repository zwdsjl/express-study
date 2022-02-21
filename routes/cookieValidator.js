async function cookieValidator(cookies){
    try{
        // await externallyValidateCookie(cookies.testCookie);
        console.log(cookies);
    }catch{
        throw new Error("Invalid cookies");
    }
}

module.exports = cookieValidator;