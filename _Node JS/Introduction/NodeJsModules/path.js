const path = require('path')

// __filename - текущий открытый файл (модуль)

console.log('Название файла: ', path.basename(__filename)) // Вывод названия файла
console.log('Имя директории: ', path.dirname(__filename)) // Вывод директории файла
console.log('Расширения файла: ', path.extname(__filename)) // Вывод расширения файла (.js)
console.log('Parse: ', path.parse(__filename)) // Парсим файл, выводится вся основная информация
// в parse можно так же обращаться через точку, например (__filename).name и т.д.

console.log(path.join(__dirname, 'server', 'index.html')) // Получение доступа к определенному файлу