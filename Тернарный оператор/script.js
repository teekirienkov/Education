let age = 26,
		greeting;

if (age > 18) {
	greeting = 'Hello, fellow adult';
} else {
	greeting = 'Hey kiddo';
}

// Более короткий вариант с помощью тернарного оператора

const greeting = age > 18 ? 'Hello, fellow adult' : 'Hey kiddo';