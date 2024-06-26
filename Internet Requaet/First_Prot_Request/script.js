const requestUrl = 'https://jsonplaceholder.typicode.com/users';

/*let xhr = new XMLHttpRequest ();
console.log ('UNSENT', xhr.readyState); // readyState = 0


xhr.open('GET','/api', true);
console.log('OPENED', xhr.readyState); // readyState = 1

xhr.onprogress = function() {
    console.log('LOADING', xhr.readyState); //readyState = 3

};

xhr.onload = function() {
    console.log('DONE', xhr.readyState); //readyState = 4
};

xhr.send(null);*/

let xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl, true);

let listItems = document.getElementById('listItems');

xhr.onload = function () {
    let users = JSON.parse(xhr.responseText);

    users.forEach(items  => {
        console.log(items);
        let dataUsers = document.createElement('li');
        let info = document.createElement('p')
        let {id, name, username, email, phone, website} = items;
        dataUsers.textContent = [name, 'User Name: ' + phone]
        info.textContent = ['ID: '+id, 'phone: ' + phone]
        listItems.appendChild(dataUsers)
        listItems.appendChild(info)
        let create = document.createElement('li');
        create.textContent = items.name;
        listItems.appendChild(create)
    });

        if (xhr.re7 == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);