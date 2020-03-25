// СТАРАЯ СХЕМА Параметров по умолчанию

function calcOrDouble(number, basis) {
    basis = basis || 2;     // Если basis передан пользователем - он остается таким.
                            // Если нет, то basis становится 2!
    console.log(number * basis);
}

calcOrDouble(3, 5); // будет выведено: 15
calcOrDouble(6);    // будет выведено: 12

// EcmaScript 6. Новая схема.

function calcOrDoubleTwo (number, basis = 2) {
    console.log(number * basis);
}

// Тут параметр по умолчанию написан прямо в скобках!