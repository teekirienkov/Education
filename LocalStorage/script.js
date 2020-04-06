// Сохранение данных. Первый параметр - ключ, второй параметр - значение.
localStorage.setItem('hay', 'hi');

// Получение значения ключа
console.log(localStorage.getItem('hay'));

// Удаление ключе и его значения
localStorage.removeItem('hey');

// Удаление всех ключей
localStorage.clear();


/* Практика
   Если пользователь поставил в чекбоксе галку, то она сохранится в браузере
   При обновлении и т.д. (В localStorage)
*/
window.addEventListener('DOMContentLoaded', function() {

    let checkbox = document.getElementById('rememberMe');
  
    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }


    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });
});