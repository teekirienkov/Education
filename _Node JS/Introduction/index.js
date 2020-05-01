// Работа с сервером без фреймворков с native модулями Node JS

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
	// if (request.url === '/') {
	// 	fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
	// 		if (err) {
	// 			throw err
	// 		}
	// 		// Аналог setRequestHeader в native JS
	// 		// 1 параметр - status code, 2 параметр - headers
	// 		response.writeHead(200, {
	// 			'Content-Type': 'text/html'
	// 		})
	// 		response.end(data)
	// 	})
	// } else if (request.url === '/contact') {
	// 	fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
	// 		if (err) {
	// 			throw err
	// 		}
	// 		// Аналог setRequestHeader в native JS
	// 		// 1 параметр - status code, 2 параметр - headers
	// 		response.writeHead(200, {
	// 			'Content-Type': 'text/html'
	// 		})
	// 		response.end(data)
	// 	})
	// }

	let filePath = path.join(__dirname, 'public', request.url ==='/' ? 'index.html' : request.url)

	// Получение расширения файла
	const ext = path.extname(filePath)
	// Если расширения нет, то добавляется .html
	if (!ext) {
		filePath += '.html'
	}

	let contentType = 'text/html'
	
	switch(ext) {
		case '.css':
			contentType = 'text/css'
			break
		case '.js':
			contentType = 'text/javascript'
			break
		default:
			contentType = 'text/html'
	}


	// Этот способ почему-то не работает, сервер падает при попытке подключиться на страницы

	fs.writeFile(filePath, (err, content) => {
		if (err) {
			fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
				if (err) {
					response.writeHead(500)
					response.end('Error')
				} else {
					response.writeHead(200, {
						'Content-Type': contentType
					})
					response.end(data)
				}
			})
		} else {
			response.writeHead(200, {
				'Content-Type': contentType
			})
			response.end(content)
		}
	})
})

const PORT = process.env.PORT || 3000

// Запуск сервера, первый параметр порт
server.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})