// jQuery
// Подключить можно локально или через ссылку в HTML

// $ - это по сути перебор элементов

// document.ready - аналог DOMContentLoaded

$(document).ready(function() {

    // ищем первый элемент листа
    // hover - событие наведения мыши на элемент
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    // .on это аналог addEventListener
    // :eq(2) - это получение второго элемента (конкретного)
    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow'); // картинка плавно исчезает при клике или появляется
    });

    // image:odd получение нечетных элементов
    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate(
            {
                opacity: 'toggle',  // параметры animate
                height: 'toggle'
            }, 3000             // вторым параметром передаем время выполнения
        );
    });
});