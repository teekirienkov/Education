const urlUsers = 'https://jsonplaceholder.typicode.com/users';


function sendRequest (method, url) {
	return new Promise((resolve, reject) => { // Возвращаем промис из функции
		const XHR = new XMLHttpRequest;

		XHR.open(method, url); // Метод запроса и ссылка

		XHR.responseType = 'json'; // Указываем, то что нам нужно распарсить в json

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

		XHR.send(); // Отправляем запрос
	})
}

sendRequest('GET', urlUsers)
	.then(data=>console.log(data))
	.catch(err=>console.log(err))