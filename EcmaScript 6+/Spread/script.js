// SPREAD операторы



let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];  // тут использованы spread оператор!
 
    // Он разворачивает массив! В итоге internet получается как один большой массив!

console.log(internet);



// Вывод данных из массива с помощью функции и оператора SPREAD
function loger(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let numbers = [2, 5, 7];

loger(...numbers);
