const requestUrlPost = 'https://jsonplaceholder.typicode.com/users';

let xhrPost = new XMLHttpRequest();

let data = {};
data.firstName = 'Vlad';
data.lastName = 'Klucinski';
let dataforsend = JSON.stringify(data);

xhrPost.open('POST', requestUrlPost, true);
xhrPost.setRequestHeader('Content-type','application/json; charset=utf-8');
xhrPost.onload = function (){
    let response = JSON.parse(xhrPost.responseText);
    if(this.readyState ==4){
        console.log(response);
    }else{
        console.log('Error')
    }
}
xhrPost.send(dataforsend);