// Без промисов
// console.log('Request data...');

// setTimeout(()=>{
//     console.log('Preparing data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     };

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data received', backendData);
//     }, 2000);


// }, 2000);


// Promise

console.log('Request data...');

const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
                server: 'aws',
                port: 2000,
                status: 'working'
            };
        resolve(backendData); // Промис завершил своё выполнение
    }, 2000);                 // backendData передается в resolve чтобы данные были в then
});

p  // обращение к Promise 
.then(data => {                                 // data тут это объект backendData! его передали сюда сверху
    return new Promise((resolve, reject) => {      // return нужен для того, чтобы не создавать новые переменные с промисами
        setTimeout(() => {
            data.modified = true;

            resolve(data);    // объект опять передается вперед в then

        }, 2000);
    });
})
.then(clientData => {              // тут объект опять называем по другому (получили data)
    clientData.fromPromise = true;
    return clientData;
})
.then(data => {
    console.log('Modified', data);
})
.catch(err => console.error('Error', err))  // catch нужен для ошибок (работает с reject)
.finally(() => console.log('Finally'));     // Этот метод вызывается в любом случае


// Функция создания setTimeout (для красивого кода)
// в функции sleep передается ms сразу в setTimeout
const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
};

sleep(2000).then(() => console.log('After 2 sec'));

// с помощью метода all можно передавать массив Промисов
// Пока промисы в массиве не произойдут, цепочка .then не начнется
Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('All promise');
    });


// метод race принимает набор промисов
// когда первый промис из массива  сработает, метод race сразу активируется
Promise.race([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('Race promises');
    });