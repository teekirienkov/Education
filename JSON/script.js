let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

// Перевод объекта и других данных в JSON формат

console.log(JSON.stringify(options));

// В JSON формате всегда всё в ""!


// С помощью parse обратное действие! JSON переводит в объект
// Таким образом происходит общение с клиентом

console.log(JSON.parse(JSON.stringify(options)));