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
// forEach
people.forEach((item) => {   // forEach принимает следующие параметры в функции - (item, index, arr)
	console.log(item.age);
})
// Map

// Filter

// Reduce

// Find

// FindIndex