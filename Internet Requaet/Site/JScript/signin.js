const baseURL = "http://49.13.31.246:9191";
const headers = {
    "content-type": "application/json"
};

/*async function signin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.removeItem('token');

    let dataServer = {
        username : username,
        password : password,
    };
    
    let requests = new Request();
    const serverData = requests.post('signin',dataServer);
*/
    /*console.log('All ok',serverData);
    localStorage.setItem('token', serverData.token);
    window.location.href = 'feed1.html'
    const resserverData =  result.json();
    localStorage.setItem('token', resserverData.token);
    console.log ( resserverData.token)
    window.location.href = '/Site/Pages/profile.html'*/
    
    function signin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        localStorage.removeItem('token');
    
        fetch (`${baseURL}/signin`,{
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
       
        localStorage.setItem('token', data.token);
        window.location.href = '/Site/Pages/feed1.html'
    })
    .catch(error => {
        console.log("You have Error in Login or Password",error)
        window.location.href = '/Site/Pages/error_page.html'
    });
    
}


/*Информационные (Informational): 100–199

100 Continue: Клиент может продолжать запрос.
101 Switching Protocols: Сервер переключает протоколы по запросу клиента.
Успешные (Successful): 200–299

200 OK: Запрос успешно выполнен.
201 Created: Запрос успешно выполнен и создан новый ресурс.
204 No Content: Запрос выполнен успешно, но в ответе нет содержимого.
Перенаправления (Redirection): 300–399

301 Moved Permanently: Ресурс перемещен на новый постоянный URL.
302 Found: Ресурс временно доступен по другому URL.
304 Not Modified: Содержимое не изменилось с последней загрузки.
Клиентские ошибки (Client Errors): 400–499

400 Bad Request: Неверный запрос.
401 Unauthorized: Требуется аутентификация.
403 Forbidden: Доступ запрещен.
404 Not Found: Ресурс не найден.
Серверные ошибки (Server Errors): 500–599

500 Internal Server Error: Внутренняя ошибка сервера.
502 Bad Gateway: Неверный ответ от вышестоящего сервера.
503 Service Unavailable: Сервис временно недоступен.
2. Методы HTTP (HTTP Methods)
Методы HTTP указывают на действие, которое нужно выполнить с ресурсом. Основные методы включают:

GET: Запрос на получение ресурса.
POST: Запрос на создание нового ресурса.
PUT: Запрос на обновление существующего ресурса.
DELETE: Запрос на удаление ресурса.
HEAD: Запрос на получение заголовков ресурса.
OPTIONS: Запрос на получение поддерживаемых методов для ресурса.
PATCH: Запрос на частичное обновление ресурса. */