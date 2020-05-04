// Деструктуризация объекта

let objUser = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    age: 20,
    status: 'login'
};

// деструктурированы только first и second
const {name: {first, second}, age, status} = objUser;

console.log(second, age, status); // second = Smith, age = 20, status = login

// Деструктуризация массива

let arr = [1, 2, 3, 4, 5];

const [a, b, c, d] = arr;

console.log(a, b, c); // a = 1, b = 2, c = 3

const [ , , f] = arr; // f = 3

console.log(f);

let array = [1, 2, 3, [100, 200, 300], 4, 5];

const [z, x, n, [m, s, q]] = array;

console.log(m, s, q);


// Практика

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
};

const {gender: {male: [maleUnder, maleAdult], female: [femaleUnder, femaleAdult]}} = country;

console.log(maleUnder, femaleAdult);