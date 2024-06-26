const baseURL = "http://49.13.31.246:9191/";
const headers = {
    "content-type": "application/json"
};

async function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    if (password == confirm_password){
       const userResult= fetch(`${baseURL}signup`,{
            method : "POST",
            headers : headers,
            body : JSON.stringify({
                username: username,
                password: password,
                confirm_password: confirm_password,
            })
        })
        let userResultObj = await (await userResult).json()
        localStorage.setItem ('token',userResultObj.jwt);
        }else{
       alert("Your Password and Conferm password is Different!!!") 
       
    }
    then(response => {
        if (!response.ok)throw new Error('')
        return response.json()
    })
    .then(data => {
        console.log('vsjo ok', data);
        localStorage.setItem('token', data.token);
        window.location.href = '/Site/Pages/profile.html'
    })
    .catch(error => {
        console.log("You have Error in Login or Password",error)
        window.location.href = '/Site/Pages/error_page.html'
    });
    
    ;/**/

   
}