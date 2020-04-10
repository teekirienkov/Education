import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app'; // webpack по умолчанию ищет в папке index.js



class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 26
		}
		this.nextYear = this.nextYear.bind(this); // тут бинд привязывает обработчик события
	}																						// на каждую кнопку класса
	nextYear() {																// важный этап
		// this.state.years++ - неправильный вариант
		this.setState(state => ({
			years: ++state.years
		}));
	}
	render () {
		const {name, surname, link} = this.props;
		const {years} = this.state;

		return (
			<React.Fragment>
				<button onClick={this.nextYear}>++</button>

				<h1>My name is {name}, surname - {surname}, years - {years}</h1>
				<a href={link}>My profile</a>
			</React.Fragment>
			)
	}
}


const All = () => {
	return (
		<React.Fragment>
			<WhoAmI name="John" surname="Smith" link="facebook.com"/>
			<WhoAmI name="Ivan" surname="Dau" link="facebook.com"/>
			<WhoAmI name="Alex" surname="Henderson" link="facebook.com"/>
		</React.Fragment>
	)
}


ReactDOM.render(
	<All/>, 
	document.getElementById('root')
);
