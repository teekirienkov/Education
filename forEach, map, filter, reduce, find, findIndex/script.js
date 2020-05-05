const people = [
	{ name: 'Timur', age: '19', budget: 50000},
	{ name: 'Oleg', age: '45', budget: 7550000},
	{ name: 'Mihail', age: '19', budget: 150000},
	{ name: 'Alex', age: '18', budget: 30000},
	{ name: 'Vladilen', age: '15', budget: 250000}
]
// for
// for (let i = 0; i < people.length; i++) {
// 	console.log(people[i])
// }

// forEach, принимает следующие параметры в функции - (item, index, arr)
// Выполняет указанную функцию один раз для каждого элемента в массиве.
// people.forEach((item) => {   // 1) item - это каждый элемент в массиве, 2) index - индекс, 3) arr - весь массив
// 	console.log(item.age) // 19, 45, 22 и т.д.
// })

// Map
// С помощью этого метода можно как угодно трансформировать данные 
// и заносить их в новый массив
// const newPeople = people.map((person) => {
// 	return person.name // либо `name ${person.name} age ${person.age}, понятно какой получится массив`
// 	// еще вариант - return person.age * 3, что присвоит в newPeople каждый возраст умноженный на 3
// })
// console.log(newPeople) // В этом массиве теперь будут только имена из people

// Filter
// Этот метод фильтрует данные и присваивает их в новый массив
// const adults = people.filter(person => person.age >= 18) // фильтруем данные по возрасту, люди старше 18
// console.log(adults); 

// Reduce
// Применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// 1) Первый параметр в функции - total, 2) второй параметр - итерируемый элемент в массиве
// const amount = people.reduce((total, person) => total + person.budget, 1000000) // второй параметр не у функции, а у reduce, это начальное значение total (0)
// console.log(amount) // получаем сумму всего бюджета
// // Результат по умолчанию можно менять, соответственно итоговый результат будет изменен

// // Find
// // Метод служит для поиска определенных элементов
// const findUser = people.find((person) => person.name === 'Timur')
// console.log(findUser) // выводится элемент массива

// // FindIndex
// // Метод служит для поиска определенного индекса элемента
// const findUserIndex = people.findIndex((person) => person.name === 'Timur')
// console.log(findUserIndex) // вывелся индекс элемента в массиве = 0



// --- Practice ---

const statePeople = people
	.filter((person) => person.budget > 100000)					// в этом методе мы фильтруем данные по условию
	.map(person => {																		// в этом методе мы как-то преобразовываем данные
		return {
			info: `${person.name}, ${person.age}`,
			infoBudget: 'Бюджет пользователя больше 100к',
			budget: person.budget
		}
	})
	.reduce((total, person) => total + person.budget, 0) // после этого метода выводится только общий бюджет

console.log(statePeople) // новый массив объектов с обновленными пользователями