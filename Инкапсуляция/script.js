// Инкапсуляция


function User(name, age) {
    this.name = name;
    // this.age = age;

    let userAge = age; // переменная инкапсуляции

    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст: ${userAge}`);
    };


    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Error. Недопустимое значение.');
        }
    };
}



let ivan = new User('Ivan', 25);


console.log(ivan.name);


console.log(ivan.getAge());


ivan.setAge(30);

console.log(ivan.getAge());

ivan.say();