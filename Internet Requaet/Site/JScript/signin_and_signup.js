const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());


const baseURL = "http://49.13.31.246:9191";
const headers = {
    "content-type": "application/json"
};

function signin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(`${baseURL}/signin`,{
        method : "POST",
        headers : headers,
        body : JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
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
       /* window.location.href = '/Site/Pages/error_page.html'*/
    });
    
}
