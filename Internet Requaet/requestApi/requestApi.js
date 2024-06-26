console.log("APP is ready !!!");

const baseURL = "http://49.13.31.246:9191";

const routes = {
    signin : "/signin",
    signup : "/signup"
};

 
// some code
console.log(`${baseURL}${routes.singup}`);
let responce = fetch('${baseURL}${routes.singup}', {
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : {
            "username": "Proline",
            "password": "proline",
            "confirm_password": "proline"
    }
})