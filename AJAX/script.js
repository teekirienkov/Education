// AJAX - Асинхронный JavaScript и XML


const inputRub = document.querySelector('.inputRUB'),
    inputUsd = document.querySelector('.inputUSD');




inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open('GET', url, async, login, pass);

    request.open('GET', 'current.json');   // 1 параметр - тип запроса (get - получение, post - отправка)
                                           // 2 параметр - то с чем работаем
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');

    request.send();


    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {         // Если request равен 4 статусу
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        }
    });
});