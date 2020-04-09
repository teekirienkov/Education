// Деструктуризация объекта

let objUser = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    age: 20,
    status: 'login'
};

// Так как тут раскрывается вложенный объект name, к нему обращаться нельзя
// деструктурированы только first и second
const {name: {first, second}, age, status} = objUser;

console.log(second, age, status); // second = Smith, age = 20, status = login

// Деструктуризация массива

let arr = [1, 2, 3, 4, 5];

const [a, b, c, d] = arr;

console.log(a, b, c); // a = 1, b = 2, c = 3