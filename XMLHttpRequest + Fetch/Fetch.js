// XMLHttpRequest более универсален

const urlUsers = 'https://jsonplaceholder.typicode.com/users';


function sendRequest (method, url, body = null) {
	const headersNull = {
		'Content-Type': 'application/json'
	}
	return fetch(url, { 					// Вторым параметром в fetch передается конфигурация
		method: method, 						// Метод запроса (GET or POST)
		body: JSON.stringify(body), // Приводит отправляемые данные в JSON формат
		headers: headersNull
	})
		.then(response=>{
			if (response.ok) {
				return response.json() 		// Приводит данные в JSON (возвращает Promise)
			}
			
			return response.json().then(error => {
				const e = new Error('Что-то пошло не так'); // Создание ошибки с помощью fetch
				e.data = error;
				throw e
			})
		})
}

const body = {
	name: 'Vladilen',
	age: 26
}

// POST | Отправляем данные body
sendRequest('POST', urlUsers, body)
	.then(data=>console.log(data))
	.catch(err=>console.log(err))

// GET | Получаем пользователей
// sendRequest('GET', urlUsers)
// 	.then(data=>console.log(data))
// 	.catch(err=>console.log(err))