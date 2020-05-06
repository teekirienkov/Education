const urlUsers = 'https://jsonplaceholder.typicode.com/users';


function sendRequest (method, url, body = null) {
	return new Promise((resolve, reject) => { // Возвращаем промис из функции
		const XHR = new XMLHttpRequest;

		XHR.open(method, url); // Метод запроса и ссылка

		XHR.responseType = 'json'; // Указываем, то что нам нужно распарсить в json
		
		XHR.setRequestHeader('Content-Type', 'application/json') // Указываем, что отправляем

		XHR.onload = () => {
			if (XHR.status >= 400) {
				PromiseRejectionEvent(XHR.response);
			} else {
				resolve(XHR.response);
			}
		}

		XHR.onerror = () => {
			reject(xhr.response); // Указываем ошибку в ответе (если она есть)
		}

		XHR.send(JSON.stringify(body)); // Отправляем запрос
	})
}

// GET | Получаем пользователей
sendRequest('GET', urlUsers)
	.then(data=>console.log(data))
	.catch(err=>console.log(err))

const oneBody = {
	name: 'Vladilen',
	age: 26
}

// POST | Отправляем объект oneBody
sendRequest('POST', urlUsers, oneBody)