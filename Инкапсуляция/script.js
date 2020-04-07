// Инкапсуляция


function User(name, age) {
    this.name = name;
    this.age = age;


    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст: ${this.age}`);
    };
}



let ivan = new User('Ivan', 25);


console.log(ivan.name);
console.log(ivan.age);


ivan.age = 30;

