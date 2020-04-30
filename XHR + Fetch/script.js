const urlUsers = 'https://jsonplaceholder.typicode.com/users';


const XHR = new XMLHttpRequest;

XHR.open('GET', urlUsers); // Метод запроса и ссылка

XHR.responseType = 'json'; // Указываем, то что нам нужно распарсить в json

XHR.onload = () => {
	console.log(XHR.response); // Выводим ответ в консоль
}

XHR.onerror = () => {
	console.log(xhr.response); // Указываем ошибку в ответе (если она есть)
}

XHR.send(); // Отправляем запрос
