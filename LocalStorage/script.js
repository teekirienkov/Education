// // Сохранение данных. Первый параметр - ключ, второй параметр - значение.
// localStorage.setItem('hay', 'hi');

// // Получение значения ключа
// console.log(localStorage.getItem('hay'));

// // Удаление ключе и его значения
// localStorage.removeItem('hey');

// // Удаление всех ключей
// localStorage.clear();


/* Практика
   Если пользователь поставил в чекбоксе галку, то она сохранится в браузере
   При обновлении и т.д. (В localStorage)
*/
window.addEventListener('DOMContentLoaded', function() {

    // Получение чекбокса
    let checkbox = document.querySelector('#rememberMe'),
        change = document.querySelector('#buttonChange'),
        form = document.querySelector('.form-group');
  
    // Проверка, если в localStorage сохранен ключ со значением true
    // то при загрузке страницы значение так же ставится true 
    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }
    
    // Такая же проверка, только если нажата кнопка, проверяется значение
    // в localStorage, и меняется цвет в форме
    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = "#FF4766";
    }

    // Если юзер ставит галочку, это значение сохраняется в localStorage
    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });

    // Если юзер ставит галочку, это значение сохраняется в localStorage
    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
    });
    
    let persone = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    };

    // Превращение объекта в JSON формат (для того чтобы сохранить в localStorage)

    // Чтобы получать такие объекты, надо наоборот JSON превращать в объект
    
    let serializedPersone = JSON.stringify(persone);

    localStorage.setItem('persone', serializedPersone);
});