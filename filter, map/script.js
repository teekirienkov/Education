// filter and map

// filter

let names = ['Ivan', 'Anna', 'Nicolai', 'Vladimir', 'Tim'];

let shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

// map 

let answers = ['iVaN', 'AnNa', 'VLAD', 'tEXT'];

answers = answers.map((item) => {
    return item.toLowerCase();
});

console.log(answers); // = ivan, anna, vlad, text

// callback можно писать в одну строку, тогда return не нужен