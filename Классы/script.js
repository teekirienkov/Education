// Классы



class Rectangle {
    constructor(height, width = 20) {    // в width присвоен параметр по умолчанию!
        this.height = height;            // То есть если данные не будут получены, он будет равен 20
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;   // Высчитывание площади
    }
}

const square = new Rectangle(100, 200);    // Присваивание в переменную класса (чтобы вывести в консоль)
                                           // Так же в него переданы параметры



console.log(square.calcArea());   // Вызов класса через переменную и вызов функции внутри него