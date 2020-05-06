// Бинарный поиск
// На входе получается отсортированный список элементов.
// Если элемент, который вы ищете, присутствует в списке, то бинарный поиск возвращает ту позицию, в которой он был найден.

// Бинарный поиск работает только в том случае, если список отсортирован.
// Например - телефонная книга отсортирована в алфавитном порядке

let low,   // low - начало массива
		mid, 	 // mid - центр массива
		high,  // high - конец массива
		guess;
		

function binarySearch(list, item) {
	low = 0,   
	high = list.length - 1;

	while (low <= high) {
		mid = Math.floor((low + high) / 2); // округление в меньшую сторону
		guess = list[mid];
		
		if (guess == item) {
			return mid;
		}

		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}

const array = [1, 3, 5, 7, 9];
		

console.log(binarySearch(array, 3));