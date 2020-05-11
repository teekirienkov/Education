let fun = () => {
    console.log(this);          // в консоль выводится window, так как у стрелочной функции нет своего контекста вызова
};

fun();


let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this); // = в консоль выводится объект obj
        };
        say();
    }
};

obj.sayNumber();