const requestUrl = 'https://jsonplaceholder.typicode.com/users';

//GET ALL USERS

let userlist = document.getElementById('users');

let xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl, true);
xhr.onload = function () {
    let users = JSON.parse(xhr.responseText);
    if (xhr.re7 == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }


    users.forEach(function (item) {
        let container = document.createElement('div');
        container.classList.add('userCards');
        let name = document.createElement('h2');
        let userName = document.createElement('p');
        let email = document.createElement('p');

        name.textContent = item.name;
        userName.textContent = item.username;
        email.textContent = item.email;

        container.appendChild(name);
        container.appendChild(userName);
        container.appendChild(email);

        userlist.appendChild(container);
        
    });

}
xhr.send(null);
