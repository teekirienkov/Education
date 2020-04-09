// EcmaScript 6

function calcOrDoubleTwo (number, basis = 2) {
    console.log(number * basis);
}

// Тут параметр по умолчанию написан прямо в скобках!

// Применение

/*
    С помощью параметров по умолчанию, функция выводит данные в правильном порядке.
*/
function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'
}) {
    console.log(`Host: ${host}, port: ${port}, user: ${user}`);
}

connect({
    port: 3500
});