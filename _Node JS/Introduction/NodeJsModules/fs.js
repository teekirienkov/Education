// File System
const fs = require('fs')
const path = require('path')

// Создание директории
// В первом параметре применяем path, название папки 'test
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log('Папка создана')
// })


// test - директория где будет создан, text.txt - название и расширение файла
const filePath = path.join(__dirname, 'test', 'text.txt')

// А тут уже создание файла с помощью path
// filePath - то что выше, второй параметр - то что прописано в файле
// fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log('Файл создан')

// 	// Добавление данных в файл
// 	fs.appendFile(filePath, '\nHello Again!', (err) => {
// 		if (err) {
// 			throw err
// 		}
// 		console.log('Файл создан')
// 	})
// })

// Читаем то что в файле, второй параметр это кодировка, с помощью которой не нужно использовать Buffer
fs.readFile(filePath, 'utf-8', (err, content) => {
	if (err) {
		throw err
	}

	console.log(content)
	// Один из способов преобразования в текст
	// const data = Buffer.from(content)
	// console.log(data.toString())
})