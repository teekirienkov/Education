const people = [
	{ name: 'Timur', age: '19', budget: '50000'},
	{ name: 'Oleg', age: '45', budget: '7550000'},
	{ name: 'Mihail', age: '22', budget: '150000'},
	{ name: 'Alex', age: '37', budget: '30000'},
	{ name: 'Vladilen', age: '25', budget: '250000'}
]
// for
// for (let i = 0; i < people.length; i++) {
// 	console.log(people[i])
// }

// forEach, принимает следующие параметры в функции - (item, index, arr)
people.forEach((item) => {   // 1) item - это каждый элемент в массиве, 2) index - индекс, 3) arr - весь массив
	console.log(item.age); // 19, 45, 22 и т.д.
})

// Map
// С помощью этого метода можно как угодно трансформировать данные 
// и заносить их в новый массив newPeople
const newPeople = people.map((person) => {
	return person;
})
console.log(newPeople) // array people

// Filter

// Reduce

// Find

// FindIndex