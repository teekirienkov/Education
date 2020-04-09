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

console.log(second, age, status);