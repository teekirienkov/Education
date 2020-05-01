const textColor = require('chalk');

const logText = (text) => {
	console.log(textColor.blue(text))
}

module.exports = logText;