// try/catch

// Главная суть этой конструкции в том
// что с помощью неё можно проверить какую-то определенную часть кода

let json = '{"id":2}';

try {
    let user = JSON.parse(json);
    console.log(user);

    // Создание своей ошибки с помощью оператора throw
    // Если в user нет name, выводится новая ошибка
    if (!user.name) {
        throw new Error('Имени юзера нет!');
    }

} catch(error) {
    console.log(error.name); // выводится название ошибки
    console.log(error.message); // сообщение ошибки
    console.log(error.stack); // ошибка полностью 

    console.log(`Мы получили ошибку: ${error.name}`);
} finally {
    console.log('А эта часть выполнится всегда');
}

// Код после этой конструкции выполняется в любом случае

